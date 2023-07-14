'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState, ReactElement, use } from 'react';
import Layout from '../layouts/layout';
import type { NextPageWithLayout } from './_app';

import SignupForm from '../components/auth/SignupForm';

const Signup = () => {
	const router = useRouter();
	const supabase = createClientComponentClient();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignUp = async () => {
		await supabase.auth.signUp({
			email,
			password,
			options: {
			emailRedirectTo: `${location.origin}/auth/callback`,
			},
		});
		router.refresh();
	};

	return (
		<SignupForm handleSignUp={handleSignUp} />
	);
};

const getLayout = (page: ReactElement) => {
	return (
		<Layout>
			{page}
		</Layout>
	);
};

const Page: NextPageWithLayout = () => {
	return (
		<>
			<div>
				<Signup />
			</div>
		</>
	);
}

Page.getLayout = getLayout;

export default Page;
