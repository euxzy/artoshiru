<script lang="ts">
  import { goto } from '$app/navigation'
  import { authClient } from '$lib/auth-client'
  import { SocialAuth } from '$lib/components/shared/auth'
  import { Button, Input, Label } from '@artoshiru/svelte/ui'
  import { createForm } from '@tanstack/svelte-form'
  import { z } from 'zod/v4'

  const validationSchema = z.object({
    username: z.string().min(1, 'Username is required'),
    password: z.string().min(1, 'Password is required'),
  })

  const form = createForm(() => ({
    defaultValues: { username: '', password: '' },
    onSubmit: async ({ value }) => {
      await authClient.signIn.username(
        { username: value.username, password: value.password },
        {
          onSuccess: () => goto('/dashboard'),
          onError: (error) => {
            console.error(error.error.message || 'Sign in failed. Please try again.')
          },
        }
      )
    },
    validators: {
      onSubmit: validationSchema,
    },
  }))
</script>

<form
  class="flex flex-col gap-6"
  onsubmit={(e) => {
    e.preventDefault()
    e.stopPropagation()
    form.handleSubmit()
  }}
>
  <div class="flex flex-col items-center gap-2 text-center">
    <h1 class="text-2xl font-bold">Login to your account</h1>
    <p class="text-muted-foreground text-sm text-balance">Enter your username below to login to your account</p>
  </div>
  <div class="grid gap-6">
    <form.Field name="username">
      {#snippet children(field)}
        <div>
          <div class="grid gap-3">
            <Label for={field.name}>Username</Label>
            <Input
              id={field.name}
              type="text"
              placeholder="username"
              onblur={field.handleBlur}
              value={field.state.value}
              oninput={(e: Event) => {
                field.handleChange((e.target as HTMLInputElement).value)
              }}
            />
          </div>
          {#if field.state.meta.isTouched}
            {#each field.state.meta.errors as error (error)}
              <p class="text-destructive text-sm" role="alert">{error?.message}</p>
            {/each}
          {/if}
        </div>
      {/snippet}
    </form.Field>
    <form.Field name="password">
      {#snippet children(field)}
        <div>
          <div class="grid gap-3">
            <div class="flex items-center">
              <Label for={field.name}>Password</Label>
              <a href="##" tabindex="-1" class="ml-auto text-sm underline-offset-4 hover:underline">
                Forgot your password?
              </a>
            </div>
            <Input
              id={field.name}
              type="password"
              onblur={field.handleBlur}
              value={field.state.value}
              oninput={(e: Event) => {
                field.handleChange((e.target as HTMLInputElement).value)
              }}
            />
          </div>
          {#if field.state.meta.isTouched}
            {#each field.state.meta.errors as error (error)}
              <p class="text-destructive text-sm" role="alert">{error?.message}</p>
            {/each}
          {/if}
        </div>
      {/snippet}
    </form.Field>

    <form.Subscribe selector={(state) => ({ canSubmit: state.canSubmit, isSubmitting: state.isSubmitting })}>
      {#snippet children(state)}
        <Button type="submit" class="w-full" disabled={!state.canSubmit || state.isSubmitting}>
          {state.isSubmitting ? 'Submitting...' : 'Login'}
        </Button>
      {/snippet}
    </form.Subscribe>

    <SocialAuth />
  </div>
  <div class="text-center text-sm">
    Don&apos;t have an account?
    <a href="/auth/register" class="underline underline-offset-4"> Sign up </a>
  </div>
</form>
