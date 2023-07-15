import { ReactElement } from 'react'
import Layout from '../layouts/layout'
import type { NextPageWithLayout } from './_app'
import Hero from '../components/Hero'

const Home = () => {
	return (
		<>
			<Hero />
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
}

Page.getLayout = getLayout

export default Page
