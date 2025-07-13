<script lang="ts">
  const menus: { to: string; label: string }[] = [
    { to: '/#', label: 'Home' },
    { to: '/#about', label: 'About' },
    { to: '/#contact', label: 'Contact' },
  ]
</script>

<header>
  <nav class="bg-primary-foreground mx-auto flex w-full max-w-7xl items-center justify-between px-12 py-8">
    <h1>Artoshiru</h1>
    <div class="flex gap-4">
      {#each menus as menu (menu.to)}
        <a href={menu.to}>{menu.label}</a>
      {/each}
    </div>
  </nav>
</header>
