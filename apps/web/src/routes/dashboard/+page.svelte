<script lang="ts">
  import { orpc } from '$lib/orpc'
  import { createQuery } from '@tanstack/svelte-query'

  const privateDataQuery = createQuery(orpc.privateData.queryOptions())
</script>

<div>
  <h1>Dashboard</h1>
  <p>privateData: {$privateDataQuery.data?.message}</p>
</div>
