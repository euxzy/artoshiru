import { env } from '$env/dynamic/public'
import { authClient } from '$lib/auth-client'
import { redirect, type Handle } from '@sveltejs/kit'

const PRIVATE_PREFIX = ['/dashboard']
const AUTH = '/auth'

export const handle: Handle = async ({ event, resolve }) => {
  const pathname = event.url.pathname

  // TODO: should be remove all console after debug

  if (PRIVATE_PREFIX.some((prefix) => pathname.startsWith(prefix)) || pathname.startsWith(AUTH)) {
    console.log('server base url', env.PUBLIC_SERVER_URL)

    const { data: session } = await authClient.getSession({
      fetchOptions: {
        baseURL: env.PUBLIC_SERVER_URL,
        headers: event.request.headers,
        credentials: 'include',
        mode: 'cors', // try to add cors mode
      },
    })

    console.log('session', session)

    if (!session?.session && !pathname.startsWith(AUTH)) {
      return redirect(302, `${AUTH}/login`)
    }

    if (session?.session && pathname.startsWith(AUTH)) {
      return redirect(302, '/dashboard')
    }
  }

  return await resolve(event)
}
