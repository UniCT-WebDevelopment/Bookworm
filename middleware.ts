import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Middleware for Supabase Auth
 *
 * @param req NextRequest
 * @returns res NextResponse
 */
const Middleware = async (req: NextRequest) => {
	const res = NextResponse.next()
	const supabase = createMiddlewareClient({ req, res })
	await supabase.auth.getSession()
	return res
}

export default Middleware
