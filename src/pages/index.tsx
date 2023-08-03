import { ReactElement } from 'react';
import Layout from '../layouts/layout';
import type { NextPageWithLayout } from './_app';
import Hero from '../components/Hero';

import CategoryPanel from '@/components/category/CategoryPanel';
import CollectionPanel from '@/components/collection/CollectionPanel';
/**
 * Homepage Component
 * @return {JSX.Element} The homepage
 */
const Home = () => {
	return (
		<>
			<Hero />
			<CategoryPanel />
			<CollectionPanel />
		</>
	);
};

const Page: NextPageWithLayout = () => {
	return (
		<Home />
	);
};

const getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>
};

Page.getLayout = getLayout;

export default Page;
