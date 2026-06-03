<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { sectionToFolder } from '$lib/images';

  interface Props {
    section: string;
    title: string;
    href: string;
  }

  let { section, title, href }: Props = $props();

  const folder = $derived(sectionToFolder(section));

  let images = $state<string[]>([]);
  let currentThumbs = $state<string[]>([]);
  let rotateTimer: ReturnType<typeof setInterval> | null = null;

  function pickFour(list: string[]): string[] {
    return [...list].sort(() => Math.random() - 0.5).slice(0, Math.min(4, list.length));
  }

  function imagePath(filename: string) {
    return `/galleries/${folder}/${filename}`;
  }

  onMount(async () => {
    try {
      const res = await fetch(`/galleries/${folder}/images.json`);
      if (!res.ok) return;
      const data = (await res.json()) as string[];
      images = data;
      currentThumbs = pickFour(data);

      rotateTimer = setInterval(() => {
        currentThumbs = pickFour(images);
      }, 120_000);
    } catch (err) {
      console.error(`Failed to load ${folder} thumbnails`, err);
    }
  });

  onDestroy(() => {
    if (rotateTimer) clearInterval(rotateTimer);
  });
</script>

<a {href} class="block cursor-pointer text-center" aria-label={`View ${title} gallery`}>
  <div class="mb-4 px-8 py-2 border border-brand-soft bg-surface inline-block">
    <h3 class="text-sm text-brand tracking-wider">{title}</h3>
  </div>

  {#if currentThumbs.length}
    <div class="grid grid-cols-2 gap-1 max-w-[280px] mx-auto">
      {#each currentThumbs as filename (filename)}
        <div class="aspect-square overflow-hidden">
          <img
            src={imagePath(filename)}
            alt=""
            loading="lazy"
            class="w-full h-full object-cover hover:opacity-90 transition-opacity"
          />
        </div>
      {/each}
      {#each Array(Math.max(0, 4 - currentThumbs.length)) as _, i (i)}
        <div class="aspect-square bg-surface border border-page"></div>
      {/each}
    </div>
  {:else}
    <div
      class="w-[280px] h-[280px] mx-auto bg-surface border border-page flex items-center justify-center"
    >
      <span class="text-brand text-sm">Coming Soon</span>
    </div>
  {/if}

  <div class="mt-2 text-center">
    <span class="text-xs text-content">
      {images.length}
      {images.length === 1 ? 'photo' : 'photos'}
    </span>
  </div>
</a>
