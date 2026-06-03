<script lang="ts">
  interface Props {
    title: string;
    description: string;
    keywords?: string[];
    canonical?: string;
  }

  let { title, description, keywords = [], canonical }: Props = $props();
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  {#if keywords.length}
    <meta name="keywords" content={keywords.join(', ')} />
  {/if}
  {#if canonical}
    <link rel="canonical" href={canonical} />
  {/if}
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
</svelte:head>
