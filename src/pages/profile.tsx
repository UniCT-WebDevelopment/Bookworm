import { ReactElement, useState, useEffect } from 'react';
import Layout from '../layouts/layout';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/router';

import type { NextPageWithLayout } from './_app';

// Define type for user object
type User = {
	id: string;
};

const Profile = () => {
	const supabase = createClientComponentClient();
	const router = useRouter();

	const [userInfo, setUserInfo] = useState<User | null>(null);

	useEffect(() => {
		if(userInfo) return;

		const getUser = async () => {
			const { data: {user} } = await supabase.auth.getUser();
			if (!user){
				router.push('/login');
				return;
			};

			setUserInfo({id: user.id});
		}
		getUser();
	}
	, [supabase, router, userInfo]);


	return (
		<>
			<div>
				<h1>Profile</h1>
				<p>Logged in as {userInfo?.id}</p>
			</div>
		</>
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
				<Profile />
			</div>
		</>
	);
}

Page.getLayout = getLayout;

export default Page;
