<script>
  /** @type {import('./$types').LayoutData} */

  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  import Seo from '$lib/components/Seo.svelte';
  import Nav from '$lib/components/Nav.svelte';

  inject({ mode: dev ? 'development' : 'production' });

  import '$lib/styles/custom-media.css';
  import '$lib/styles/sizes.css';
  import '$lib/styles/colours.css';
  import '$lib/styles/type.css';
  import '$lib/styles/effects.css';

  export let data;
</script>

<Seo />

<Nav />

<main>
  <slot />
</main>

<style lang="postcss">
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
