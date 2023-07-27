import Layout from '../layouts/layout';
import type { NextPageWithLayout } from './_app';
import { ReactElement } from 'react';
import Image from 'next/image';
import Image404  from '../../public/404.svg';
import { useRouter } from 'next/router';

/**
 * 404 page.
 * 
 * @return { JSX.Element } 404 page
 */
const Page404 = () => {
	const router = useRouter();

	// Redirect to Thanks page after successful authentication
	if (router.asPath.includes('/auth/callback') && ! router.asPath.includes('error') ) {
		router.push('/thanks');
	}

	return (
		<div className='flex flex-col w-full lg:flex-row p-8'>
			<div className='place-items-center md:max-w-2xl md:p-8'>
				<h2 className="text-4xl mb-10 font-bold">
					It seems like there&apos;s nothing here
				</h2>

				<div className="text-xl leading-8">
					<p className='mb-8'>
						It seems like the books took a vacation without leaving a forwarding address,
						and now we&apos;re left with a whimsical 404 page.
					</p>

					<p className='mb-8'>
						Don&apos;t worry, our team of literary detectives is on the case,
						searching high and low for those mischievous books.
						In the meantime, feel free to browse our digital bookshelves
						or imagine your own fantastic story to fill the pages.
					</p>
					<p className='mb-8'>
						Keep calm and book on!
					</p>
				</div>
			</div>
			<div className='place-items-center'>
				<Image src={Image404} width={1200} height={800} alt="404" />
			</div>
		</div>
	)
};

const getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>
}

const Page: NextPageWithLayout = () => {
	return (
		<>
			<div>
				<Page404 />
			</div>
		</>
	)
}

Page.getLayout = getLayout

export default Page