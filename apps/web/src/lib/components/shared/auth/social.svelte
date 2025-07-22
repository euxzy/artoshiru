<script lang="ts">
  import { env } from '$env/dynamic/public'
  import { authClient } from '$lib/auth-client'
  import { Button } from '@artoshiru/svelte/ui'
  import Icon from '@iconify/svelte'

  const socials = [
    { icon: 'akar-icons:github-fill', label: 'GitHub', name: 'github' },
    { icon: 'akar-icons:google-fill', label: 'Google', name: 'google' },
    { icon: 'akar-icons:linkedin-fill', label: 'Linkedin', name: 'linkedin' },
  ]

  const onSignIn = async (provider: string) => {
    await authClient.signIn.social({ provider, callbackURL: `${env.PUBLIC_APP_URL}/dashboard` })
  }
</script>

<div
  class="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t"
>
  <span class="bg-background text-muted-foreground relative z-10 px-2"> Or continue with </span>
</div>

<div class="grid grid-cols-3 gap-4">
  {#each socials as social (social.name)}
    <Button variant="outline" type="button" class="w-full" onclick={() => onSignIn(social.name)}>
      <Icon icon={social.icon} />
      <span class="sr-only">Login with {social.label}</span>
    </Button>
  {/each}
</div>
