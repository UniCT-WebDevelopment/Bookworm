import Layout from '../layouts/layout';
import type { NextPageWithLayout } from './_app';
import { ReactElement, use } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import type User from '@/types/User';
import CommunityCard from '@/components/user/CommunityCard';

/**
 * Render community page with all users.
 * 
 * @return {JSX.Element} Community page.
 */
const CommunityPage = () => {
	const supabase = createClientComponentClient();
	const [users, setUsers] = useState<User[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {

		if(!supabase || users.length > 0 || isLoading ) return;

		const getUsers = async () => {
			setIsLoading(true);
			const { data: profiles, error } = await supabase.from('profiles').select('*');

			if(error) {
				console.error(error);
				return;
			}

			setUsers([
				...users,
				...profiles.map(profile => ({
					id: profile.id,
					email: profile.email,
					username: profile.username,
					favoriteGenre: profile.favorite_genre
				}))
			]);

			setIsLoading(false);
		};
		getUsers();
	}, [supabase, users, isLoading]);

	return (
		<div className='sm:min-h-[500px]'>
			<h1 className='text-2xl font-bold'>Community</h1>
			<div>
				<p className='text-md text-base-content mb-10'>
					Welcome to the community page. Here you can see all users registered on the platform.
					Explore their reviews and find new books to read!
				</p>
			</div>
			{users.length > 0 && (
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					{users.map(user => (
						<CommunityCard key={user.id} user={user} />
					))}
				</div>
			)
			}
		</div>
	)
};

const getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>
};

const Page: NextPageWithLayout = () => {
	return (
		<CommunityPage />
	)
};

Page.getLayout = getLayout;

export default Page;