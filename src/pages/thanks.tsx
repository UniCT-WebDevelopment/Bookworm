import React, { ReactElement } from 'react'
import Layout from '../layouts/layout'
import type { NextPageWithLayout } from './_app'
import Image from 'next/image'
import Thanks from '../../public/thanks.svg'
import Link from 'next/link'

const ThanksPage = () => {
	return (
		<div className='flex flex-col justify-between w-full lg:flex-row p-8'>
			<div className='flex flex-col justify-between md:p-8'>
				<div>
					<h2 className="text-4xl font-bold mb-10">
						Thank you for your submission!
					</h2>
					<div>
						<p className='mb-4'>
							Welcome to the community!<br/>
							We are excited to have you here.
						</p>
						<p className='mb-4'>
							Explore the site and find your next favorite book.
						</p>
					</div>
				</div>

				<div>
					<p className='text-sm'>
						Don&apos;t forget to check your email for a confirmation link.
					</p>
					<p className='text-sm'>
						Something went wrong? Please contact us at <a href="mailto:example@example">
							<b className='text-accent font-bold'> example@example</b>
						</a>.
					</p>
				</div>
			</div>
			<div>
				<Image src={Thanks} width={500} height={500} alt="Thanks" />
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
				<ThanksPage />
			</div>
		</>
	)
}

Page.getLayout = getLayout

export default Page