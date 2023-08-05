import { ReactElement, useState, useEffect } from 'react';
import Layout from '../layouts/layout';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/router';

import type { NextPageWithLayout } from './_app';
import type User from '@/types/User';
import SideInfo from '@/components/user/SideInfo';

import ShareYourIDPanel from '@/components/user/ShareIDPanel';

/**
 * Profile page.
 * 
 * @returns {ReactElement} Profile page.
 */
const Profile = () => {
	const supabase = createClientComponentClient();
	const router = useRouter();
	const [userInfo, setUserInfo] = useState<User | null>(null);

	// TODO: Implement page counter.
	const [pageCounter, setPageCounter] = useState(0);

	useEffect(() => {
		if (userInfo) return

		const getUser = async () => {
			const { data: { user }} = await supabase.auth.getUser();

			if (!user){
				router.push('/login');
				return;
			}

			setUserInfo({
				id: user.id,
				email: user.email || '' ,
				username: user.user_metadata.username,
				favoriteGenre: user.user_metadata.favorite_genre
			});
		}
		getUser();
	}, [supabase, router, userInfo]);

	return (
		<div>
			<h1 className='text-2xl mb-4'>
				Hi <b className='text-bold text-accent'>{userInfo?.username}</b>!
				{process.env.NODE_ENV === 'development' && (
					<span className='text-xs text-gray-500'> (id: {userInfo?.id})</span>
				)}
			</h1>
			<div className="flex flex-col w-full lg:flex-row">
				<div className="flex-grow max-w-md flex flex-col justify-between gap-12">
					<div>
						<h3 className='mb-2'>
							Every day is a good day to read a book!<br />
							Share your throughs with the community.
						</h3>
						<div className="form-control">
							<textarea className="textarea h-24 textarea-bordered" placeholder="Enter your answer here"></textarea>
							<button className="btn btn-primary mt-4">
								Share
							</button>
						</div>
					</div>
					<ShareYourIDPanel userId={userInfo?.id || ''} />
				</div>

				<div className="divider lg:divider-horizontal"></div>
				<div className='grid flex-grow'>
					<SideInfo />
				</div>
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
				<Profile />
			</div>
		</>
	)
}

Page.getLayout = getLayout

export default Page
