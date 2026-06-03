<script lang="ts">
  import {
    npsImages,
    magicOfChildhoodImages,
    featureCards,
    mediaCoverageItems,
    googleReviews,
    iapcpImages,
    iapcpQA
  } from '$lib/mentions';

  const iconMap = {
    award: '🏆',
    star: '★',
    newspaper: '📰'
  } as const;
</script>

{#snippet externalLink(href: string, label: string, sizeClass: string = 'text-sm md:text-base')}
  <a
    {href}
    target="_blank"
    rel="noopener noreferrer"
    class={`${sizeClass} text-brand hover:underline inline-flex items-center`}
  >
    {label}
    <span class="ml-1" aria-hidden="true">↗</span>
  </a>
{/snippet}

<section class="section-pad">
  <div class="container-wide max-w-6xl">
    <header class="mb-8 md:mb-12 text-center">
      <h2 class="heading-display text-3xl md:text-5xl text-brand mb-3 md:mb-4">
        Mentions &amp; Features
      </h2>
      <p class="text-base md:text-lg text-content px-2">
        Awards, publications, and recognition from around the world
      </p>
    </header>

    <section class="mb-10 md:mb-16">
      <div class="flex items-center mb-4 md:mb-6">
        <span class="text-brand text-2xl md:text-3xl mr-2 md:mr-3" aria-hidden="true">🏆</span>
        <h3 class="heading-display text-xl md:text-3xl text-brand">
          The NPS - Highly Commended Awards
        </h3>
      </div>

      <div class="bg-surface p-4 md:p-6 border-l-4 border-brand-soft mb-4 md:mb-6">
        <p class="text-sm md:text-base text-content mb-3 md:mb-4">
          The following images received Highly Commended Awards by the judges of The NPS - one of
          the UK's fastest growing photographic organizations. The first picture on the month of
          September 2017 and the remaining three on August 2017.
        </p>
        {@render externalLink('https://www.thenps.com/', 'Visit The NPS')}
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-4">
        {#each npsImages as image (image.src)}
          <div class="aspect-square bg-page border-2 border-brand-border overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        {/each}
      </div>
    </section>

    {#each featureCards as card (card.title)}
      <article class="mb-8 md:mb-12 bg-card p-4 md:p-8 border-2 border-brand-border">
        <div class="flex items-center mb-3 md:mb-4">
          <span class="text-brand text-xl md:text-2xl mr-2 md:mr-3" aria-hidden="true">
            {iconMap[card.iconKey]}
          </span>
          <h3 class="heading-display text-lg md:text-2xl text-brand">{card.title}</h3>
        </div>
        <p class="text-sm md:text-base text-content mb-3 md:mb-4">{card.description}</p>
        <div
          class={[
            card.image.aspect === 'square' ? 'aspect-square' : 'aspect-video',
            card.image.constrain ? 'max-w-md mx-auto' : '',
            'bg-page border-2 border-brand-border overflow-hidden mb-4'
          ]}
        >
          <img
            src={card.image.src}
            alt={card.image.alt}
            loading="lazy"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        {#if card.link}
          {@render externalLink(card.link.href, card.link.label)}
        {/if}
      </article>
    {/each}

    <section class="mb-8 md:mb-12 bg-card p-4 md:p-8 border-2 border-brand-border">
      <div class="flex items-center mb-3 md:mb-4">
        <span class="text-brand text-xl md:text-2xl mr-2 md:mr-3" aria-hidden="true">★</span>
        <h3 class="heading-display text-lg md:text-2xl text-brand">
          Featured by @MagicofChildhood
        </h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {#each magicOfChildhoodImages as image (image.src)}
          <div class="aspect-square bg-page border-2 border-brand-border overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        {/each}
      </div>
    </section>

    <section class="mb-8 md:mb-12">
      <div class="flex items-center mb-4 md:mb-6">
        <span class="text-brand text-2xl md:text-3xl mr-2 md:mr-3" aria-hidden="true">📰</span>
        <h3 class="heading-display text-xl md:text-3xl text-brand">Media Coverage</h3>
      </div>
      <p class="text-sm md:text-base text-content mb-4 md:mb-6">
        Featured in various newspapers and publications.
      </p>

      <div class="mb-6 md:mb-8 bg-card p-4 md:p-6 border-2 border-brand-border">
        <h4 class="text-lg md:text-xl text-brand mb-3 md:mb-4">
          The HansIndia - Womenia Feature
        </h4>
        <p class="text-sm md:text-base text-content mb-3 md:mb-4">
          Featured on The HansIndia newspaper - Womenia - September 9, 2019
        </p>
        <div class="aspect-video max-w-2xl mx-auto mb-4">
          <video
            controls
            class="w-full h-full border-2 border-brand-border"
            poster="/mentions/hansindia_womenia.avif"
          >
            <source
              src="https://video.wixstatic.com/video/8df3c2_45dff0aa5e5e4d15ab3250b44eadd0d5/720p/mp4/file.mp4"
              type="video/mp4"
            />
            <track kind="captions" />
          </video>
        </div>
        {@render externalLink(
          'https://epaper.thehansindia.com/m5/2320179/HYDERABAD-MAIN/HYDERABAD-MAIN#page/5/1',
          'View ePaper Article'
        )}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {#each mediaCoverageItems as item (item.src)}
          <article
            class="bg-card border-2 border-brand-border overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div class="aspect-[3/4] bg-page overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-3 md:p-4">
              <h4 class="text-base md:text-lg text-brand mb-1">{item.title}</h4>
              <p class="text-xs md:text-sm text-content">{item.description}</p>
              {#if item.link}
                <div class="mt-2">
                  {@render externalLink(item.link, 'Read Article', 'text-xs md:text-sm')}
                </div>
              {/if}
            </div>
          </article>
        {/each}
      </div>
    </section>

    <section class="mb-10 md:mb-16">
      <div class="flex items-center mb-4 md:mb-6">
        <span class="text-brand text-2xl md:text-3xl mr-2 md:mr-3" aria-hidden="true">💬</span>
        <h3 class="heading-display text-xl md:text-3xl text-brand">Kind Words</h3>
      </div>
      <p class="text-sm md:text-base text-content mb-4 md:mb-6">
        Reviews and testimonials from happy clients.
      </p>

      <div class="mb-4 md:mb-6 bg-surface p-3 md:p-4 border-l-4 border-brand-soft">
        <p class="text-sm md:text-base text-content mb-2 md:mb-3">View reviews on Google:</p>
        <div class="flex flex-col gap-2">
          {@render externalLink(
            'https://maps.app.goo.gl/b3mSmwNktG8uqfNMA',
            'Jovy Thomas Visuals - Hendersonville, TN (Current)',
            'text-xs md:text-sm'
          )}
          {@render externalLink(
            'https://maps.app.goo.gl/Ka1TqZkdXHMdugFB7',
            'Jovy Thomas Visuals - Hyderabad, India',
            'text-xs md:text-sm'
          )}
        </div>
      </div>

      <div>
        <h4 class="text-lg md:text-xl text-brand mb-3 md:mb-4">Google Reviews</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {#each googleReviews as src, i (src)}
            <div
              class="bg-card border-2 border-brand-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                {src}
                alt={`Client Review ${i + 1}`}
                loading="lazy"
                class="w-full h-auto object-contain"
              />
            </div>
          {/each}
        </div>
      </div>
    </section>

    <section class="mb-8 md:mb-12 bg-surface p-4 md:p-8 border-2 border-brand-soft">
      <div class="flex items-center mb-4 md:mb-6">
        <span class="text-brand text-2xl md:text-3xl mr-2 md:mr-3" aria-hidden="true">📰</span>
        <h3 class="heading-display text-xl md:text-3xl text-brand">
          IAPCP Article - Whimsical Portraits
        </h3>
      </div>

      <p class="text-sm md:text-base text-content mb-4 md:mb-6 italic">
        Sharing from an article for team - Indian Association of Professional Child Photographers
        (IAPCP) with the topic - whimsical portraits.
      </p>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-6 md:mb-8">
        {#each iapcpImages as image (image.src)}
          <div
            class="bg-card border-2 border-brand-border overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              class="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        {/each}
      </div>

      <div class="space-y-4 md:space-y-8">
        {#each iapcpQA as qa (qa.question)}
          <article class="bg-card p-4 md:p-6 border-l-4 border-brand-soft">
            <h4 class="text-base md:text-lg text-brand mb-3 md:mb-4">{qa.question}</h4>
            {#each qa.answers as answer, i (i)}
              <p
                class={[
                  'text-sm md:text-base text-content leading-relaxed',
                  i < qa.answers.length - 1 ? 'mb-3 md:mb-4' : ''
                ]}
              >
                {answer}
              </p>
            {/each}
          </article>
        {/each}
      </div>
    </section>
  </div>
</section>
