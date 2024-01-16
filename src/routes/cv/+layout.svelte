<script>
  /** @type {import('./$types').LayoutData} */

  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  // import Seo from '$lib/components/Seo.svelte';

  inject({ mode: dev ? 'development' : 'production' });

  import '$lib/styles/cv.css';

  // export let data;
</script>

<!-- <Seo /> -->

<slot />
