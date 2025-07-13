<script lang="ts">
  import Header from '$lib/components/shared/header.svelte'

  let { children } = $props()
</script>

<div>
  <Header />
  {@render children?.()}
</div>
