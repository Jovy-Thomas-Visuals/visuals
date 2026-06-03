<script lang="ts">
  import { page } from '$app/stores';
  import { navItems, isActive } from '$lib/nav';

  let mobileMenuOpen = $state(false);

  const pathname = $derived($page.url.pathname);
</script>

<header class="bg-page">
  <div class="container-wide px-4 py-4 md:py-6">
    <div class="flex items-center justify-between">
      <div class="hidden md:block flex-shrink-0">
        <img
          src="/peoples-choice-badge.avif"
          alt="GLOW Finalist Award"
          class="w-20 lg:w-32 h-20 lg:h-32 object-contain"
        />
      </div>

      <div class="flex-1 flex flex-col items-center px-2">
        <div class="mb-2 md:mb-4">
          <img src="/balloons.avif" alt="Hot air balloons" class="h-10 md:h-16 w-auto" />
        </div>

        <h1
          class="heading-display text-2xl sm:text-3xl md:text-4xl text-brand-soft mb-1 md:mb-2 text-center"
        >
          JOVY THOMAS VISUALS
        </h1>

        <p class="text-xs md:text-sm text-content-muted mb-2 md:mb-3 text-center">
          Preserve those moments forever...
        </p>

        <p class="text-xs md:text-sm text-content text-center px-2">
          Hendersonville-TN-Portrait and Small event Photographer
        </p>
      </div>

      <div class="hidden md:block flex-shrink-0">
        <img
          src="/portrait-master-badge.avif"
          alt="Portrait Masters Bronze 2021"
          class="w-20 lg:w-32 h-20 lg:h-32 object-contain"
        />
      </div>
    </div>
  </div>

  <nav class="border-t border-brand-border">
    <div class="container-wide px-4">
      <div class="md:hidden flex justify-center py-2">
        <button
          type="button"
          onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
          class="flex items-center gap-2 px-4 py-2 text-brand-soft border border-brand-border bg-card text-sm"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true">{mobileMenuOpen ? '✕' : '☰'}</span>
          <span>Menu</span>
        </button>
      </div>

      {#if mobileMenuOpen}
        <div id="mobile-menu" class="md:hidden pb-4">
          <ul class="flex flex-col items-center gap-2">
            {#each navItems as item (item.href)}
              {@const active = isActive(pathname, item.href)}
              <li class="w-full max-w-xs">
                {#if active}
                  <a
                    href={item.href}
                    onclick={() => (mobileMenuOpen = false)}
                    class="block w-full text-center px-4 py-2 text-sm transition-colors border border-brand-border text-brand-soft bg-surface"
                    aria-current="page"
                  >
                    {item.label}
                  </a>
                {:else}
                  <a
                    href={item.href}
                    onclick={() => (mobileMenuOpen = false)}
                    class="block w-full text-center px-4 py-2 text-sm transition-colors border border-brand-border text-content bg-card hover:text-brand-soft hover:bg-surface"
                  >
                    {item.label}
                  </a>
                {/if}
              </li>
            {/each}
          </ul>
        </div>
      {/if}

      <ul class="hidden md:flex items-center justify-center gap-1 py-2 flex-wrap">
        {#each navItems as item (item.href)}
          {@const active = isActive(pathname, item.href)}
          <li>
            {#if active}
              <a
                href={item.href}
                class="block px-3 py-1 text-xs transition-colors border border-brand-border text-brand-soft bg-surface"
                aria-current="page"
              >
                {item.label}
              </a>
            {:else}
              <a
                href={item.href}
                class="block px-3 py-1 text-xs transition-colors border border-brand-border text-content bg-card hover:text-brand-soft hover:bg-surface"
              >
                {item.label}
              </a>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  </nav>
</header>
