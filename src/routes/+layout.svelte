<script lang="ts">
  import Header from '$components/Header.svelte';
  import Seo from '$components/Seo.svelte';
  import { page } from '$app/stores';

  let { children } = $props();

  const meta = $derived($page.data.seo ?? {
    title:
      'Jovy Thomas Visuals | Family, Kids & Portrait Photographer - Nashville, Hendersonville, Gallatin, TN',
    description:
      'Award-winning professional photographer specializing in family, kids, maternity, and portrait photography. Serving Nashville, Hendersonville, Gallatin, and Middle Tennessee.',
    keywords: []
  });
</script>

<Seo title={meta.title} description={meta.description} keywords={meta.keywords} />

<div class="min-h-screen bg-page">
  <Header />
  {@render children()}
</div>

<style>
  :global(html) {
    -webkit-text-size-adjust: 100%;
  }
  :global(body) {
    margin: 0;
    background-color: #e8e4d8;
    color: #3d3d3d;
    font-family: 'Courier New', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
  }
  :global(h1),
  :global(h2),
  :global(h3),
  :global(h4),
  :global(h5),
  :global(h6) {
    font-family: 'Fredericka the Great', cursive;
    font-weight: inherit;
    font-size: inherit;
    margin: 0;
  }
  :global(*),
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
  }
</style>
