<script lang="ts">
    import Gallery from "$components/Gallery.svelte";
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
</script>

<section class="py-8 md:py-12 px-2 md:px-4">
    <header class="mb-6 md:mb-8 text-center">
        <a
            href="/gallery"
            class="inline-block mb-4 px-3 md:px-4 py-2 text-xs md:text-sm text-brand border border-brand-soft bg-surface hover:bg-page transition-colors"
        >
            ← Back to Gallery Overview
        </a>
        <h2 class="heading-display text-2xl md:text-4xl text-brand">
            {data.category.title}
        </h2>
    </header>

    <div class="container-wide">
        <Gallery section={data.category.section} />
    </div>

    <footer class="mt-16 text-center text-xs text-brand">
        <p>
            All photographs in this site are copyright of Jovy Thomas - © Jovy
            Thomas Visuals 2026. All Rights Reserved
        </p>
    </footer>
</section>
