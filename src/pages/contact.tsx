import React, { ReactElement } from 'react'
import Layout from '../layouts/layout'
import type { NextPageWithLayout } from './_app'
import Link from 'next/link'

const Contact = () => {
	return (
		<>
			<div className="min-h-screen">
				<h2 className="mb-10 text-5xl font-bold">
					Contact
				</h2>
				<div>
					<p className="mb-4">
						For any questions, please contact us at:
						<Link className="ml-2 text-accent font-bold link link-hover" href="mailto:example@example.com" passHref>
							example@example.com
						</Link>
					</p>
				</div>
			</div>
		</>
	)
};


const getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>
}

const Page: NextPageWithLayout = () => {
	return (
		<>
			<div>
				<Contact />
			</div>
		</>
	)
}

Page.getLayout = getLayout

export default Page