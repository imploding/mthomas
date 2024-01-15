<!-- SEO.svelte -->
<script>
  export let title = 'Matt Thomas | Software Designer';
  export let description = 'UI/UX Design & Frontend Development';
  export let tags = ['Design', 'UI', 'UX', 'Website', 'Web', 'App', 'Product Design', 'Australia'];
  export let ogType = 'website';
</script>

<svelte:head>
  {#if title}
    <title>{title}</title>
    <meta property="og:title" content={title} />
  {/if}

  {#if description}
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
  {/if}
  {#if tags.length > 0}
    <meta name="keywords" content={tags.join(',')} />
  {/if}
  <meta property="og:type" content={ogType} />
</svelte:head>
