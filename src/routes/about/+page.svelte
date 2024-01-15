<script>
  /** @type {import('./$types').PageData} */

  import Seo from '$lib/components/Seo.svelte';
  import Stack from '$lib/components/Stack.svelte';

  export let data;
</script>

<Seo title="Matt Thomas | Software Designer" />

<div class="wrapper stack">
  <h1>Info</h1>

  <div class="stack">
    <h2>About</h2>
    <ul>
      <li>CV intro paragraph + read more</li>
      <li>Where I've worked + types of projects I've worked on</li>
      <li>My initiatives in each role</li>
      <li>Photo of myself</li>
    </ul>
  </div>

  <div class="stack">
    <h2>What kind of work I do</h2>
    <ul>
      <li>UI/UX designer & front-end developer</li>
      <li>Examples of work and projects</li>
      <li>UI/UX mobile/web</li>
      <li>Research & workshops</li>
      <li>Development</li>
      <li>Teaching, advocating, mentoring</li>
    </ul>
  </div>

  <h2>Skillset</h2>

  <h2>Principles & approach</h2>
  <ul>
    <li>How do we embrace the grain of the web, not introducing complexity and confusion?</li>
    <li>How can we make these experiences more inclusive for everyone?</li>
  </ul>

  <h2>/now</h2>
  <ul>
    <li>Basic list with expanders for more info. Side projects, at home, personal goals, fun stuff</li>
    <li>Van building</li>
    <li>Playing drums</li>
    <li>Sound design w/ op-1 (include plinks & plonks)</li>
    <li>Learning JS / SwiftUI / Web Components</li>
    <li>Sparklines for stats (futureland kinda stuff, commits, days in a streak)</li>
  </ul>

  <h2>Tools of the trade</h2>

  <h2>Tech specs</h2>
  <ul>
    <li>This website was built with Svelte/11ty...</li>
    <li>How I build it</li>
    <li>Where it's hosted</li>
    <li>Performance</li>
    <li>
      This website has no ads, analytics, webstats, iframes, scripts or any other kind of trackers. I have no interest
      in collecting data about you.
    </li>
  </ul>
</div>

<style lang="postcss">
  :root {
    /* Article Grid Columns */
    --article-gap: clamp(1rem, 6vw, 3rem);
    --article-full: minmax(var(--article-gap), 1fr);
    --article-content: min(60ch, 100% - var(--article-gap) * 2);
    --article-popout: minmax(0, var(--s-4));
    --article-feature: minmax(0, var(--s-10));

    --article-layout: [full-start] var(--article-full) [feature-start] var(--article-feature) [popout-start]
      var(--article-popout) [content-start] var(--article-content) [content-end] var(--article-popout) [popout-end]
      var(--article-feature) [feature-end] var(--article-full) [full-end];
  }
</style>
