import { authClient } from '$lib/auth-client'
import { redirect, type Handle } from '@sveltejs/kit'

const PRIVATE_PREFIX = ['/dashboard']
const AUTH = '/auth'

export const handle: Handle = async ({ event, resolve }) => {
  const pathname = event.url.pathname
  if (PRIVATE_PREFIX.some((prefix) => pathname.startsWith(prefix)) || pathname.startsWith(AUTH)) {
    const { data: session } = await authClient.getSession({
      fetchOptions: {
        headers: event.request.headers,
        credentials: 'include',
      },
    })

    if (!session?.session && !pathname.startsWith(AUTH)) {
      return redirect(302, `${AUTH}/login`)
    }

    if (session?.session && pathname.startsWith(AUTH)) {
      return redirect(302, '/dashboard')
    }
  }

  return await resolve(event)
}
