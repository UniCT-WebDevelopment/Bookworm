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
	const code = requestUrl.searchParams.get('code');

	if (code) {
		const supabase = createRouteHandlerClient({ cookies });
		await supabase.auth.exchangeCodeForSession(code);

		const { data, error } = await supabase.auth.getUser();

		if(error) {
			return NextResponse.error();
		}

		// Create a new entry for user public profile
		const {user: { id, email, user_metadata: { username, favorite_genre }}} = data;
		const { error: profileError } = await supabase.from('profiles').insert([
			{
				id,
				email,
				username,
				favorite_genre
			}
		]);

		if(profileError) {
			return NextResponse.error();
		}

		// Redirect thanks for subscribing page
		return NextResponse.redirect('/thanks');
	}

	// URL to redirect to after sign in process completes
	return NextResponse.redirect(requestUrl.origin);
}
