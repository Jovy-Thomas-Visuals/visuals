<script lang="ts">
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
  const post = $derived(data.post);
</script>

<article class="py-12 px-4">
  <div class="container-narrow">
    <a
      href="/blog"
      class="inline-flex items-center text-brand hover:text-brand-strong transition-colors mb-8 group"
    >
      <span class="mr-2 transition-transform group-hover:-translate-x-1" aria-hidden="true">←</span>
      Back to Blog
    </a>

    <header class="mb-8">
      <h1 class="heading-display text-4xl md:text-5xl text-brand mb-4">{post.title}</h1>
      <div class="flex items-center text-sm text-content">
        <span class="mr-2 text-brand" aria-hidden="true">📅</span>
        <span>{post.date}</span>
      </div>
    </header>

    <div class="mb-12">
      <div
        class="aspect-video bg-page border-2 border-dashed border-brand-border flex items-center justify-center"
      >
        <p class="text-brand text-lg">Featured Image Placeholder</p>
      </div>
    </div>

    <div class="max-w-none">
      <div class="bg-surface p-8 border-l-4 border-brand-soft mb-8">
        <p class="text-content leading-relaxed mb-4">{post.description}</p>
        <p class="text-content leading-relaxed">
          [Full blog post content will go here. This is a placeholder for the detailed article
          content, which can include multiple paragraphs, images, tips, and stories.]
        </p>
      </div>

      <div class="space-y-8">
        {#each [1, 2, 3] as n (n)}
          <section>
            <h2 class="heading-display text-2xl text-brand mb-4">Section Heading {n}</h2>
            <div class="bg-card p-6 border border-brand-border mb-4">
              <p class="text-content leading-relaxed">
                Placeholder content for section {n}. This could include photography tips, client
                stories, or creative inspiration.
              </p>
            </div>
            {#if n < 3}
              <div
                class="aspect-video bg-page border-2 border-dashed border-brand-border flex items-center justify-center"
              >
                <p class="text-brand">Section Image Placeholder</p>
              </div>
            {/if}
          </section>
        {/each}
      </div>
    </div>

    <div class="mt-12 p-8 bg-page border-2 border-brand-soft text-center">
      <h3 class="heading-display text-2xl text-brand mb-4">Interested in a Photography Session?</h3>
      <p class="text-content mb-6">
        Let's capture your special moments together. Contact me to book your session.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:629-308-4828" class="btn-primary">Call Now</a>
        <a href="mailto:Jovy.thomas@gmail.com" class="btn-ghost">Send Email</a>
      </div>
    </div>

    <div class="mt-8 text-center">
      <a
        href="/blog"
        class="inline-flex items-center text-brand hover:text-brand-strong transition-colors group"
      >
        <span class="mr-2 transition-transform group-hover:-translate-x-1" aria-hidden="true">←</span>
        Back to All Posts
      </a>
    </div>
  </div>
</article>
