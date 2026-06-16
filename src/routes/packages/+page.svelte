<script lang="ts">
    interface Package {
        id: number;
        title: string;
        rate: string;
        includes: string[];
        duration: string;
    }

    const packages: Package[] = [
        {
            id: 1,
            title: "Express Photo Session",
            rate: "$50",
            includes: ["2 carefully edited digital pictures"],
            duration: "10 minutes",
        },
        {
            id: 2,
            title: "Regular Photo Session",
            rate: "$250",
            includes: [
                "15 basic edited digital images",
                "5 advanced edited images",
            ],
            duration: "1 hour 30 minutes",
        },
    ];
</script>

<section class="section-pad">
    <div class="container-narrow">
        <header class="mb-12 text-center">
            <h2 class="heading-display text-5xl text-brand mb-6">Packages</h2>
            <p class="text-xl text-brand italic mb-4">
                Sessions made to suit the moment
            </p>
        </header>

        <div class="mb-16">
            <p class="text-content mb-6 leading-relaxed">
                Every story deserves its own pace—some need a quick, joyful
                pause, others a slower, lingering moment in the light.
            </p>
            <p class="text-content mb-8 leading-relaxed">
                I offer two natural-light sessions designed around that idea: an
                unhurried way to capture the people, expressions, and small
                details that make a memory yours.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
                {#each packages as pkg (pkg.id)}
                    <article
                        class="bg-card border-2 border-brand-border overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <div class="p-6 md:p-8">
                            <h3
                                class="heading-display text-2xl text-brand mb-4 text-center"
                            >
                                {pkg.title}
                            </h3>

                            <div
                                class="flex items-center justify-center mb-6 bg-page py-3 px-4"
                            >
                                <span class="text-xl text-brand"
                                    >Rate: {pkg.rate}</span
                                >
                            </div>

                            <div class="flex items-center justify-center mb-6">
                                <p class="text-sm text-content">
                                    <span class="text-brand">Duration:</span>
                                    {pkg.duration}
                                </p>
                            </div>

                            <ul
                                class="text-center text-sm text-content space-y-2 leading-relaxed"
                            >
                                {#each pkg.includes as item, i (i)}
                                    <li>{item}</li>
                                {/each}
                            </ul>
                        </div>
                    </article>
                {/each}
            </div>

            <div class="mb-12 bg-card p-8 border border-brand-border">
                <h3 class="heading-display text-2xl text-brand mb-6">
                    Add-Ons
                </h3>
                <p class="text-content mb-4">
                    Want a few more keepsakes from the session? Each additional
                    edited picture is
                    <span class="text-brand">$18</span>.
                </p>
                <p class="text-content text-sm italic mt-4">
                    For custom packages or to book a session, please
                    <a href="/contact" class="text-brand hover:underline"
                        >get in touch</a
                    >.
                </p>
            </div>

            <div class="mb-16 bg-card p-8 border-l-4 border-brand-soft">
                <h3 class="heading-display text-2xl text-brand mb-4">
                    Portfolio Use
                </h3>
                <p class="text-content mb-0 leading-relaxed">
                    I would love to feature some of the session images in my
                    portfolio — my page, site, and social channels. For an
                    exclusive release without portfolio use, a one-time fee of
                    <span class="text-brand">$25</span> applies.
                </p>
            </div>
        </div>

        <footer class="mt-16 text-center text-xs text-brand">
            <p>
                All photographs in this site are copyright of Jovy Thomas - ©
                Jovy Thomas Visuals 2026. All Rights Reserved
            </p>
        </footer>
    </div>
</section>
