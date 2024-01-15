<!-- Stack.svelte -->
<script>
  export let size = '';

  if (size === 's') {
    size = 'stack--small';
  } else if (size === 'l') {
    size = 'stack--large';
  }
</script>

<div class="stack {size}">
  <h6>{size}</h6>
  <slot />
</div>

<style lang="postcss">
  :global(.stack) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  :global(.stack > *) {
    margin-block: 0;
  }

  :global(.stack > * + *) {
    margin-block-start: var(--s-2);
  }

  :global(.stack > :nth-child(2)) {
    margin-block-end: auto;
  }

  :global(.stack--large > * + *) {
    margin-block-start: var(--s-4);
  }

  :global(.stack--small > * + *) {
    margin-block-start: var(--s);
  }
</style>
