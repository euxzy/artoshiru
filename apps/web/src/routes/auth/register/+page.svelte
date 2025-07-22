<script lang="ts">
  import { goto } from '$app/navigation'
  import { authClient } from '$lib/auth-client'
  import { SocialAuth } from '$lib/components/shared/auth'
  import { Button, Input, Label } from '@artoshiru/svelte/ui'
  import { createForm } from '@tanstack/svelte-form'
  import { z } from 'zod/v4'

  const validationSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    username: z.string().min(3, 'Username must be at least 3 characters'),
    email: z.email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
  })

  const form = createForm(() => ({
    defaultValues: { name: '', username: '', email: '', password: '' },
    onSubmit: async ({ value }) => {
      await authClient.signUp.email(
        {
          email: value.email,
          password: value.password,
          name: value.name,
        },
        {
          onSuccess: () => {
            goto('/dashboard')
          },
          onError: (error) => {
            console.error(error.error.message || 'Sign up failed. Please try again.')
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
    <h1 class="text-2xl font-bold">Create an account</h1>
  </div>
  <div class="grid gap-6">
    <form.Field name="name">
      {#snippet children(field)}
        <div>
          <div class="grid gap-3">
            <Label for={field.name}>Name</Label>
            <Input
              id={field.name}
              type="text"
              placeholder="name"
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
    <form.Field name="email">
      {#snippet children(field)}
        <div>
          <div class="grid gap-3">
            <Label for={field.name}>Email</Label>
            <Input
              id={field.name}
              type="email"
              placeholder="email"
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
            <Label for={field.name}>Password</Label>
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
          {state.isSubmitting ? 'Submitting...' : 'Create Account'}
        </Button>
      {/snippet}
    </form.Subscribe>

    <SocialAuth />
  </div>
  <div class="text-center text-sm">
    Already have an account?
    <a href="/auth/login" class="underline underline-offset-4"> Sign in </a>
  </div>
</form>
