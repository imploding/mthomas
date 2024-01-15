<script>
  /** @type {import('./$types').LayoutData} */

  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  import Seo from '$lib/components/Seo.svelte';
  import Nav from '$lib/components/Nav.svelte';

  inject({ mode: dev ? 'development' : 'production' });

  export let data;
</script>

<Seo />

<Nav />

<main>
  <slot />
</main>

<style lang="postcss">
  :root {
    /* Weights
  Thin	100
  Extra Light	200
  Light	300
  Regular	400
  Medium	500
  Semi Bold	600
  Bold	700
  Extra Bold	800
  Black	900 */

    /* Colour */
    --black: hsl(0deg 0% 0%);
    --white: hsl(0deg 0% 100%);

    --primary-25: oklch(98.62% 0.014 84.58);
    --primary-50: oklch(96.78% 0.032 82.77);
    --primary-100: oklch(93.63% 0.065 83.56);
    --primary-200: oklch(90.62% 0.09 83.44);
    --primary-300: oklch(87.6% 0.12 81.73);
    --primary-400: oklch(84.93% 0.15 80.29);
    --primary-500: oklch(82.65% 0.16 77.74);
    --primary-600: oklch(79.05% 0.17 73.17);
    --primary-700: oklch(70.78% 0.15 70.06);
    --primary-800: oklch(58.06% 0.13 65.93);
    --primary-900: oklch(42.59% 0.1 60.22);

    --grey-25: oklch(99.11% 0 0);
    --grey-50: oklch(98.51% 0 0);
    --grey-100: oklch(97.02% 0 0);
    --grey-200: oklch(92.19% 0 0);
    --grey-300: oklch(87.61% 0 0);
    --grey-400: oklch(71.55% 0 0);
    --grey-500: oklch(55.55% 0 0);
    --grey-600: oklch(43.86% 0 0);
    --grey-700: oklch(37.91% 0 0);
    --grey-800: oklch(28.09% 0 0);
    --grey-900: oklch(19.13% 0 0);

    --text-color: var(--grey-900);
    --link-color: var(--primary-600);
    --highlight-color: var(--primary-200);

    --border-color: hsla(0, 0%, 100%, 0.1);

    /* Type */
    --sans: 'GT America', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji';
    --extended: 'GT America Extended', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji';
    --condensed: 'GT America Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji';
    --mono: 'GT America Mono', monospace;

    --weight-light: 300;
    --weight-regular: 400;
    --weight-medium: 500;
    --weight-bold: 600;

    --size-sm: clamp(0.8rem, 0.12vw + 0.77rem, 0.89rem);
    --size-base: clamp(1rem, 0.25vw + 0.94rem, 1.19rem);
    --size-md: clamp(1.25rem, 0.44vw + 1.14rem, 1.58rem);
    --size-lg: clamp(1.56rem, 0.73vw + 1.38rem, 2.11rem);
    --size-xl: clamp(1.95rem, 1.15vw + 1.67rem, 2.81rem);
    --size-xxl: clamp(2.44rem, 1.74vw + 2.01rem, 3.75rem);
    --size-xxxl: clamp(3.05rem, 2.59vw + 2.4rem, 5rem);

    --leading-flat: 1;
    --leading-tighter: 1.15;
    --leading-tight: 1.3;
    --leading-standard: 1.5;
    --leading-loose: 1.7;

    /* Misc */
    --measure: 60ch;
    --container-width: clamp(16rem, 95vw, 70rem);

    /* Spacing */
    --s: 0.8rem;
    --s-0: calc(0.5 * var(--s));
    --s-2: calc(2 * var(--s));
    --s-3: calc(3 * var(--s));
    --s-4: calc(4 * var(--s));
    --s-5: calc(5 * var(--s));
    --s-6: calc(6 * var(--s));
    --s-7: calc(7 * var(--s));
    --s-8: calc(8 * var(--s));
    --s-9: calc(9 * var(--s));
    --s-10: calc(10 * var(--s));
    --s-15: calc(15 * var(--s));
    --s-20: calc(20 * var(--s));
    --s-25: calc(25 * var(--s));

    /* Radius */
    --radius-sharp: 0.02em;
    --radius-sm: var(--s-0);
    --radius: var(--s);
    --radius-lg: var(--s-2);
    --radius-xl: var(--s-3);
    --radius-xxl: var(--s-3);
    --radius-pill: 999px;
    --radius-circle: 50%;

    /* Shadows */
    --shadow: 0 1px 3px rgba(12, 12, 12, 0.09);
    --shadow-header: 0 1px 5px rgba(12, 12, 12, 0.05);
    --shadow-card: 0 0 0 1px var(--n-color-border), 0 1px 5px rgba(12, 12, 12, 0.05), 0 0 40px rgba(12, 12, 12, 0.015);
    --shadow-nav: 0 0 0 1px var(--n-color-border), 0 5px 17px rgba(12, 12, 12, 0.14);
    --shadow-popout: 0 4px 12px rgba(12, 12, 12, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05);
    --shadow-modal: 0 24px 38px 3px rgba(12, 12, 12, 0.16), 0 9px 86px 8px rgba(12, 12, 12, 0.1),
      0 11px 15px -7px rgba(12, 12, 12, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05);
    --shadow-dark: 0 1px 3px rgba(0, 0, 0, 0.2);
    --shadow-header-dark: 0 1px 5px rgba(0, 0, 0, 0.15);
    --shadow-card-dark: 0 0 0 1px var(--n-color-border), 0 1px 5px rgba(0, 0, 0, 0.15);
    --shadow-nav-dark: 0 0 0 1px var(--n-color-border), 0 5px 17px rgba(0, 0, 0, 0.24);
    --shadow-popout-dark: 0 4px 12px rgba(0, 0, 0, 0.25), 0 0 0 1px var(--n-color-border);
    --shadow-modal-dark: 0 0 0 1px var(--n-color-border), 0 24px 38px 3px rgba(0, 0, 0, 0.34),
      0px 9px 86px 8px rgba(0, 0, 0, 0.28), 0px 11px 15px -7px rgba(0, 0, 0, 0.28);

    /* Transitions */
    --fast: 0.15s ease all;
    --medium: 0.2s ease all;
    --slow: 0.3s ease all;
  }

  /* Wide Gamut Screens */
  @supports (color: color(display-p3 0)) {
    :root {
      --gold: color(display-p3 1 0.776 0.298);
      --gold-light: color(display-p3 1 0.8 0.4);
      --gold-grad: linear-gradient(160deg, color(display-p3 1 0.807 0.4), color(display-p3 0.737 0.533 0.2));
      --gold-grad-hover: linear-gradient(
          155deg,
          color(display-p3 1 0.807 0.4) 0%,
          color(display-p3 0.737 0.533 0.2) 40%,
          #fff 60%,
          #fff 100%
        )
        no-repeat 100% 100%;
    }
  }

  /* Breakpoints */
  @custom-media --min-baby (min-width: 480px);
  @custom-media --max-baby (max-width: 480px);
  @custom-media --min-mama (min-width: 800px);
  @custom-media --max-mama (max-width: 800px);
  @custom-media --min-papa (min-width: 1000px);
  @custom-media --max-papa (max-width: 1000px);
  @custom-media --min-mega (min-width: 1300px);
  @custom-media --max-mega (max-width: 1300px);
  @custom-media --min-giga (min-width: 1800px);
  @custom-media --max-giga (max-width: 1800px);

  /* Reset Styles */
  :global(body) {
    font-size: var(--size-base);
    line-height: var(--leading-standard);
    font-family: var(--sans);
    color: var(--text-color);
    min-height: 100vh;
  }

  :global(*) {
    text-decoration-color: var(--primary-500);
    text-decoration-thickness: 0.2ex;
    text-underline-offset: 0.4ex;
    max-inline-size: var(--measure);
  }

  :global(html, body, div, header, nav, main, footer) {
    max-inline-size: none;
  }

  /* ::selection {
  background: var(--primary-100);
} */

  :global(blockquote, body, dd, dl, figure, h1, h2, h3, h4, p) {
    margin: 0;
  }

  :global(ol[role='list'], ul[role='list']) {
    list-style: none;
  }

  :global(h1, h2, h3) {
    max-width: 30ch;
    /* letter-spacing: -.005ch; */
    line-height: var(--leading-tighter);
    text-rendering: optimizeLegibility;
    text-wrap: balance;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-family: var(--sans);
    font-weight: 600;
  }

  :global(h1) {
    font-size: var(--size-xxl);
    line-height: 1;
  }

  :global(h2) {
    font-size: var(--size-xl);
  }

  :global(h3) {
    font-size: var(--size-lg);
  }

  :global(h4) {
    font-size: var(--size-md);
    line-height: var(--leading-tight);
  }

  :global(h5) {
    font-size: var(--size-base);
    line-height: var(--leading-tight);
  }

  :global(h6) {
    font-size: var(--size-sm);
    line-height: var(--leading-tight);
  }

  :global(a) {
    color: inherit;
  }

  :global(strong, b) {
    font-weight: var(--weight-medium);
  }

  :global(.wrapper) {
    width: 95vw;
    width: var(--container-width);
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    position: relative;
  }
</style>
