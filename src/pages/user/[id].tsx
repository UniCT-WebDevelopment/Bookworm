import { NextPageWithLayout } from '../_app';
import Layout from '../../layouts/layout';
import { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import type User from '@/types/User';
import UserPublicReviews from '@/components/user/UserPublicReviews';

/**
 * User public page.
 * Retrive user public information or redirect to 404 page if user not found.
 * 
 * @return {JSX.Element} User public page.
 */
const UserPublicPage = () => {
	const supabase = createClientComponentClient();
	const router = useRouter();
	const [userInfo, setUserInfo] = useState<User | null>(null);

	useEffect(() => {
		if(userInfo || !router.query.id) return;

		const getUserById = async () => {
			const { data: profiles, error } = await supabase.from('profiles').select('*').eq('id', router.query.id).single();

			if(error) {
				router.push('/404');
				return;
			}

			const { id, email, username, favorite_genre } = profiles;
			setUserInfo({
				id,
				email,
				username,
				favoriteGenre: favorite_genre
			});
		}
		getUserById();
	}, [router, supabase, userInfo]);

	return <>
		{userInfo && (
			<>
				<h1 className='text-xl'>
					Your are viewing <b className='text-accent'>{userInfo.username}</b>&apos;s profile.
				</h1>
				<div className='max-w-sm'>
					<UserPublicReviews userId={userInfo.id} />
				</div>
			</>
		)}
	</>
}

const getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>
};

const Page: NextPageWithLayout = () => {
	return (
		<>
			<div>
				<UserPublicPage />
			</div>
		</>
	);
};

Page.getLayout = getLayout;

export default Page;
