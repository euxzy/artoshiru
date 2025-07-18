<script lang="ts">
  import {
    Button,
    Separator,
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
  } from '@artoshiru/svelte/ui'
  import Icon from '@iconify/svelte'
  import { HandCoins } from '@lucide/svelte'

  let { children } = $props()

  const navMain = [
    {
      title: 'Dashboard',
      url: '#',
      icon: 'akar-icons:dashboard',
    },
    {
      title: 'Source',
      url: '#',
      icon: 'akar-icons:wallet',
    },
    {
      title: 'Pocket',
      url: '#',
      icon: 'streamline-plump:bag-remix',
    },
    {
      title: 'Transaction',
      url: '#',
      icon: 'streamline:subscription-cashflow',
    },
    {
      title: 'Category',
      url: '#',
      icon: 'pajamas:list-task',
    },
  ]
</script>

<div>
  <SidebarProvider style="--sidebar-width: calc(var(--spacing) * 72); --header-height: calc(var(--spacing) * 12);">
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton class="data-[slot=sidebar-menu-button]:!p-1.5">
              {#snippet child({ props })}
                <a href="/dashboard" {...props}>
                  <HandCoins size={32} />
                  <span class="text-base font-semibold">Artoshiru</span>
                </a>
              {/snippet}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent class="flex flex-col gap-2">
            <SidebarMenu>
              {#each navMain as item (item.title)}
                <SidebarMenuItem>
                  <SidebarMenuButton tooltipContent={item.title}>
                    <a href={item.url} class="flex items-center gap-2">
                      {#if item.icon}
                        <Icon icon={item.icon} class="size-4" />
                      {/if}
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              {/each}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>

    <SidebarInset>
      <header
        class="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)"
      >
        <div class="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="mx-2 data-[orientation=vertical]:h-4" />
          <h1 class="text-base font-medium">Dashboard</h1>
          <div class="ml-auto flex items-center gap-2">
            <Button
              href="https://github.com/euxzy/artoshiru"
              variant="ghost"
              size="sm"
              class="dark:text-foreground hidden sm:flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          </div>
        </div>
      </header>

      <div class="flex flex-1 flex-col">
        <div class="@container/main flex flex-1 flex-col gap-2">
          <div class="p-4 md:p-6">
            {@render children?.()}
          </div>
        </div>
      </div>
    </SidebarInset>
  </SidebarProvider>
</div>
