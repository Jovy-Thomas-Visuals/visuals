<script lang="ts">
    import ThumbnailWall from "$components/ThumbnailWall.svelte";
    import { galleryCategories } from "$lib/galleryCategories";
</script>

<section class="section-pad">
    <header class="mb-8 md:mb-12 text-center">
        <h2 class="heading-display text-3xl md:text-5xl text-brand">GALLERY</h2>
    </header>

    <div class="container-narrow max-w-5xl">
        <div
            class="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-8 md:gap-y-12"
        >
            {#each galleryCategories as category (category.id)}
                <div class="flex flex-col items-center">
                    <ThumbnailWall
                        section={category.section}
                        title={category.title}
                        href={`/gallery/${category.slug}`}
                    />
                </div>
            {/each}
        </div>
    </div>

    <footer class="mt-16 text-center text-xs text-brand">
        <p>
            All photographs in this site are copyright of Jovy Thomas - © Jovy
            Thomas Visuals 2026. All Rights Reserved
        </p>
    </footer>
</section>
