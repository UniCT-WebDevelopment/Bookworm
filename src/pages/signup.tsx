'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState, ReactElement, use } from 'react';
import Layout from '../layouts/layout';
import type { NextPageWithLayout } from './_app';

import SignupForm from '../components/auth/SignupForm';
import Image from 'next/image';
import SignUpImage from '../../public/signup.svg';

const Signup = () => {
	const router = useRouter();
	const supabase = createClientComponentClient();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [retypePassword, setRetypePassword] = useState('');
	const [username, setUsername] = useState('');
	const [favoriteGenre, setFavoriteGenre] = useState('');
	const [error, setError] = useState('');

	// TODO: Move this to a separate file.
	const allowedGenres = [
		'fiction',
		'nonfiction',
		'novel',
		'romance',
		'self-help',
		'horror',
		'children',
		'biography',
		'autobiography',
		'politics',
		'mistery',
		'thriller',
		'fantasy',
		'thriller',
		'poetry',
		'history',
		'art',
		'cookbooks',
		'comic',
		'graphic-novel',
		'young-adult',
	];

	const handleSignUp = async () => {
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`,
				data: {
					username: username,
					favorite_genre: favoriteGenre,
				}
			},
		});

		if(error) {
			setError(error.message);
			return;
		}

		router.refresh();
	}

	return(
		<div className="flex flex-col w-full justify-center lg:flex-row gap-8 lg:gap-24">
			<div className="place-items-center self-center">
				<SignupForm
					handleSignUp={handleSignUp}
					setEmail={setEmail}
					setPassword={setPassword}
					setRetypePassword={setRetypePassword}
					setUsername={setUsername}
					email={email}
					password={password}
					retypePassword={retypePassword}
					username={username}
					favoriteGenre={favoriteGenre}
					setFavoriteGenre={setFavoriteGenre}
					allowedGenres={allowedGenres}
					error={error}
				/>
			</div> 
			<div className="place-items-center self-center">
				<Image
					src={SignUpImage}
					alt="Signup image"
					width={500}
					height={500}
				/>
			</div>
		</div>
	);
}

const getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>
}

const Page: NextPageWithLayout = () => {
	return (
		<>
			<div>
				<Signup />
			</div>
		</>
	)
}

Page.getLayout = getLayout

export default Page
