<script lang="ts">
  import { onMount } from 'svelte';
  import { sectionToFolder } from '$lib/images';

  interface Props {
    section?: string;
  }

  let { section = 'HOME' }: Props = $props();

  const folder = $derived(sectionToFolder(section));

  let filenames = $state<string[]>([]);

  onMount(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`/galleries/${folder}/images.json`);
        if (!res.ok) return;
        const data = (await res.json()) as string[];
        if (!cancelled) filenames = data;
      } catch (err) {
        console.error(`Failed to load ${folder} images`, err);
      }
    })();
    return () => {
      cancelled = true;
    };
  });

  let viewportWidth = $state(typeof window === 'undefined' ? 1200 : window.innerWidth);

  $effect(() => {
    const onResize = () => (viewportWidth = window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });

  const columnCount = $derived(viewportWidth >= 900 ? 3 : viewportWidth >= 750 ? 2 : 1);

  const columns = $derived.by(() => {
    const cols: string[][] = Array.from({ length: columnCount }, () => []);
    filenames.forEach((name, i) => cols[i % columnCount].push(name));
    return cols;
  });
</script>

{#if filenames.length}
  <section class="gallery">
    <div class="masonry">
      {#each columns as column, columnIndex (columnIndex)}
        <div class="column">
          {#each column as filename (filename)}
            <div class="tile">
              <img
                src={`/galleries/${folder}/${filename}`}
                alt=""
                loading="lazy"
                class="block w-full h-auto cursor-pointer transition-opacity hover:opacity-90"
              />
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </section>
{/if}

<style>
  .gallery {
    margin: 0;
    padding: 0;
  }
  .masonry {
    display: flex;
    flex-direction: row;
    gap: 0;
  }
  .column {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    gap: 0;
    min-width: 0;
  }
  .tile {
    line-height: 0;
  }
</style>
