<script lang="ts">
    const awards = [
        {
            src: "/peoples-choice-badge.avif",
            alt: "GLOW Finalist Award",
            caption: "GLOW Finalist Award",
        },
        {
            src: "/portrait-master-badge.avif",
            alt: "Portrait Masters Bronze 2021",
            caption: "Portrait Masters\nBronze Award 2021",
        },
        {
            src: "/nps-award-badge.avif",
            alt: "NPS Highly Commended Award",
            caption: "NPS Highly\nCommended Award",
        },
        {
            src: "/bump-baby-beyond-badge.avif",
            alt: "Featured in Bump Baby & Beyond",
            caption: "Featured in\nBump Baby & Beyond",
        },
    ];
</script>

<section class="section-pad">
    <div class="container-narrow max-w-5xl">
        <header class="mb-8 md:mb-12 text-center">
            <h2
                class="heading-display text-3xl md:text-5xl text-brand mb-4 md:mb-6"
            >
                About Me
            </h2>
        </header>

        <article class="mb-10 md:mb-16">
            <h3
                class="heading-display text-2xl md:text-3xl text-brand mb-6 md:mb-8 text-center"
            >
                MY STORY
            </h3>

            <div class="overflow-hidden">
                <img
                    src="/about/jovy-headshot.jpeg"
                    alt="Jovy Thomas - Professional Photographer"
                    class="block w-32 mx-auto mb-4 md:float-left md:w-48 md:mr-6 md:ml-0 rounded-lg border-4 border-brand-border shadow-lg"
                />

                <p
                    class="text-sm md:text-base text-content mb-4 md:mb-6 leading-relaxed text-justify"
                >
                    After doing my Bachelors in Computer Applications, I wanted
                    to learn Media and took Multimedia for Masters. Photography
                    was part of the course. Started my job as a video editor and
                    worked with a few tv channels and a British movie.
                </p>

                <p
                    class="text-sm md:text-base text-content mb-4 md:mb-6 leading-relaxed text-justify"
                >
                    After having kids, I didn't want a full-time job. So once I
                    got my Canon 6D, I started photography professionally
                    (part-time). I love to click faces and try to think how it
                    will look if someone paints them. When I started this, at
                    2013, I told my friend whose session I was doing, that
                    through my work I want to increase the self-confidence in
                    people. After seeing the results she said she started loving
                    herself more. It really motivated me. Everyone looks
                    beautiful. This is my tiny effort to bring smile and
                    confidence in people. When people are happy with themselves
                    they will make people around them happy too.
                </p>

                <p
                    class="text-sm md:text-base text-content mb-4 md:mb-6 leading-relaxed text-justify"
                >
                    For kids, I try to create a magical beauty surrounding them
                    which in turn are part of my own dreams. Mostly the things I
                    wished I had experienced.
                </p>

                <p
                    class="text-sm md:text-base text-content mb-6 md:mb-8 leading-relaxed text-justify"
                >
                    Some of my works were a part of exhibitions in India and
                    France. My works were featured in - Hans India, Deccan
                    Chronicle, The New Indian Express and international
                    magazines like Bump baby and beyond, Beautiful World etc.
                    Awards - Highly Commended Award by TheNPS, Bronze Award from
                    The Portrait Masters, Glow Finalist Award.
                </p>
            </div>
        </article>

        <section class="mb-8 md:mb-12">
            <h3
                class="heading-display text-2xl md:text-3xl text-brand mb-6 md:mb-8 text-center"
            >
                Awards &amp; Recognition
            </h3>

            <div
                class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center justify-items-center"
            >
                {#each awards as award (award.alt)}
                    <div class="text-center">
                        <img
                            src={award.src}
                            alt={award.alt}
                            class="w-20 md:w-32 h-20 md:h-32 object-contain mx-auto mb-2 md:mb-3"
                        />
                        <p class="text-xs text-content whitespace-pre-line">
                            {award.caption}
                        </p>
                    </div>
                {/each}
            </div>
        </section>

        <div
            class="text-center bg-surface border-2 border-brand-border p-4 md:p-8 mt-8 md:mt-12"
        >
            <p class="text-base md:text-lg text-content mb-3 md:mb-4">
                Ready to create beautiful memories together?
            </p>
            <p class="text-sm text-brand">
                <a href="/contact" class="hover:underline"
                    >Contact me to schedule your session</a
                >
            </p>
        </div>

        <footer class="mt-10 md:mt-16 text-center text-xs text-brand px-2">
            <p>
                All photographs in this site are copyright of Jovy Thomas - ©
                Jovy Thomas Visuals 2026. All Rights Reserved
            </p>
        </footer>
    </div>
</section>
