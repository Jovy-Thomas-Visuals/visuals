<script lang="ts">
    import Gallery from "$components/Gallery.svelte";

    const includes = [
        "High-resolution digital images",
        "Standard enhancements: color and exposure correction, vibrance, contrast, saturation, sharpening and vignetting",
        "Images delivered on a USB drive or Google Drive for easy access and sharing",
        "Your choice of PNG or JPG formats",
        "A delivery window of 1–3 weeks, giving me enough time to polish each image with care",
    ];
</script>

<section class="section-pad">
    <div class="container-narrow">
        <header class="mb-12 text-center">
            <h2 class="heading-display text-5xl text-brand mb-6">
                Small Event Photography
            </h2>
            <p class="text-xl text-brand italic mb-4">
                Every gathering has a story to tell
            </p>
        </header>

        <div class="mb-16">
            <p class="text-content mb-6 leading-relaxed">
                Every event—big or small, has a story.
            </p>
            <p class="text-content mb-6 leading-relaxed">
                Maybe it's a birthday toast, a quiet conversation between
                friends, a laugh shared across the room, or the glow of candles
                on a special evening. My goal is to notice those moments and
                capture them as beautiful memories to treasure.
            </p>
            <p class="text-content mb-8 leading-relaxed">
                With my Small Event Photography package, I document your
                gathering in a natural, unobtrusive way, creating a collection
                of images that feel honest, warm, and true to your story.
            </p>

            <div class="mb-12 bg-surface p-8 border-l-4 border-brand-soft">
                <h3 class="heading-display text-2xl text-brand mb-6">
                    What You Receive
                </h3>
                <p class="text-content mb-4">
                    For <span class="text-brand">$150 per hour</span>, you get
                    complete, thoughtful coverage of your event.
                </p>
                <p class="text-content mb-6">
                    For every hour I'm with you, I deliver a minimum of 50
                    edited images, each one enhanced to bring out the best
                    color, light, and emotion.
                </p>

                <p class="text-brand mb-4">Your final collection includes:</p>
                <ul class="space-y-3 mb-0">
                    {#each includes as item (item)}
                        <li class="flex items-start text-content">
                            <span
                                class="text-brand mr-3 mt-0.5"
                                aria-hidden="true">✓</span
                            >
                            <span>{item}</span>
                        </li>
                    {/each}
                </ul>

                <p class="text-content mt-6 italic text-sm">
                    No albums or prints are included — this package is designed
                    for clients who prefer the freedom of digital images and
                    want the flexibility to print or share them however they
                    wish.
                </p>
            </div>

            <div class="mb-12 bg-card p-8 border border-brand-border">
                <h3 class="heading-display text-2xl text-brand mb-6">
                    Transparent Billing
                </h3>
                <p class="text-content mb-4">
                    Coverage is billed in 30-minute increments.
                </p>
                <p class="text-content mb-4">
                    Each 30-minute block is <span class="text-brand">$75</span> and
                    includes 25 edited images.
                </p>
                <p class="text-content mb-6">
                    The maximum coverage is 3 hours, so I can give your event my
                    full attention and deliver the best images possible.
                </p>
                <p class="text-content text-sm italic">
                    To ensure a smooth process and timely delivery of your
                    memories, payment is kindly requested before the transfer of
                    any digital images.
                </p>
                <p class="text-content text-sm italic mt-4">
                    Events outside Hendersonville and Gallatin may be subject to
                    a travel and mileage fees.
                </p>
            </div>

            <div class="mb-12 bg-page p-8 border border-brand-soft">
                <h3 class="heading-display text-2xl text-brand mb-4">
                    A Little Extra Polish
                </h3>
                <p class="text-content mb-0">
                    If you'd like additional retouching—beyond the standard
                    enhancements—I offer that too for <span class="text-brand"
                        >$8 per image</span
                    >. This is perfect for close-up portraits.
                </p>
            </div>

            <div class="mb-16 bg-card p-8 border-l-4 border-brand-soft">
                <h3 class="heading-display text-2xl text-brand mb-4">
                    Portfolio Use
                </h3>
                <p class="text-content mb-0 leading-relaxed">
                    I would love to feature some of the event images in my
                    portfolio — my page, site, and social channels. For an
                    exclusive release without portfolio use, a one-time fee of
                    <span class="text-brand">$25</span> applies.
                </p>
            </div>
        </div>

        <div class="mt-16">
            <h3 class="heading-display text-4xl text-brand text-center mb-8">
                Past Events
            </h3>
            <Gallery section="SMALL EVENT" />
        </div>

        <footer class="mt-16 text-center text-xs text-brand">
            <p>
                All photographs in this site are copyright of Jovy Thomas - ©
                Jovy Thomas Visuals 2026. All Rights Reserved
            </p>
        </footer>
    </div>
</section>
