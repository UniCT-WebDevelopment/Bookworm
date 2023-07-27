import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Redirects to the Thanks page after successful authentication.
 * 
 * @param request NextRequest
 * @return { NextResponse } NextResponse
 */
export async function GET(request: NextRequest) {

	const requestUrl = new URL(request.url);
	console.log(request);
	const code = requestUrl.searchParams.get('code');

	if (code) {
		const supabase = createRouteHandlerClient({ cookies });
		await supabase.auth.exchangeCodeForSession(code);

		// Redirect thanks for subscribing page
		return NextResponse.redirect('/thanks');
	}

	// URL to redirect to after sign in process completes
	return NextResponse.redirect(requestUrl.origin);
}
