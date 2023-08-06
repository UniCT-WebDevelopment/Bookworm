import { NextPageWithLayout } from '../_app';
import Layout from '../../layouts/layout';
import { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import type User from '@/types/User';
import UserPublicReviews from '@/components/user/UserPublicReviews';
import PublicIdeasPanel from '@/components/user/PublicIdeasPanel';

import Link from 'next/link';
import BadgesPanel from '@/components/user/BadgesPanel';

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
				<h1 className='text-2xl mt-4'>
					Your are viewing <b className='text-accent'>{userInfo.username}</b>&apos;s profile.
				</h1>
				<div className="flex flex-col w-full mt-8 gap-4">
					<div className="place-items-center w-full">
						<div className='flex flex-col w-full lg:flex-row gap-4 justify-between'>
							<div className='flex flex-col'>
								<div className='bg-primary bg-opacity-10 p-8 h-fit rounded-sm shadow-sm'>
									<p className="text-xl">
										This user is a big fan of
										<b>
											<Link
												href={`/category/${userInfo.favoriteGenre}`}
												className='font-bold ml-1'
											>
												{userInfo.favoriteGenre}
											</Link>
										</b>
									</p>
								</div>
								<BadgesPanel />
							</div>
							<div className='bg-base-200 p-8 h-auto rounded-sm shadow-sm flex-grow'>
								<h2 className="text-xl font-bold">Last updates</h2>
								<PublicIdeasPanel userId={userInfo.id} />
							</div>
						</div>
					</div> 
					<div className="place-items-center bg-base-200 p-8">
						<h2 className="text-xl font-bold">Last reviews</h2>
						<UserPublicReviews userId={userInfo.id} />
					</div>
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
