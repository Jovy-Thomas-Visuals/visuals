<script lang="ts">
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<section class="section-pad">
  <div class="container-wide max-w-6xl">
    <header class="mb-12 text-center">
      <h2 class="heading-display text-5xl text-brand mb-4">Blog</h2>
      <p class="text-lg text-content">
        Photography tips, behind-the-scenes stories, and creative inspiration
      </p>
    </header>

    {#if data.posts.length}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each data.posts as post (post.id)}
          <a
            href={`/blog/${post.id}`}
            class="bg-card border-2 border-brand-border overflow-hidden hover:shadow-lg transition-all block group"
          >
            <div
              class="aspect-video bg-page border-b-2 border-dashed border-brand-border flex items-center justify-center group-hover:bg-surface-strong transition-colors"
            >
              <p class="text-brand text-sm text-center">Cover Image<br />Placeholder</p>
            </div>

            <div class="p-6">
              <div class="flex items-center text-xs text-brand mb-3">
                <span class="mr-2" aria-hidden="true">📅</span>
                <span>{post.date}</span>
              </div>

              <h3
                class="text-xl text-brand mb-3 group-hover:text-brand-strong transition-colors"
              >
                {post.title}
              </h3>

              <p class="text-sm text-content leading-relaxed mb-4">{post.description}</p>

              <div
                class="flex items-center text-sm text-brand group-hover:text-brand-strong transition-colors"
              >
                <span>Read More</span>
                <span class="ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
              </div>
            </div>
          </a>
        {/each}
      </div>
    {:else}
      <div class="text-center py-16 bg-surface border-2 border-dashed border-brand-border">
        <p class="text-brand text-lg">
          No blog posts yet. Check back soon for photography tips and stories!
        </p>
      </div>
    {/if}
  </div>
</section>
