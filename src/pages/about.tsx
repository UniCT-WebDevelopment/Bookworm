import Layout from '../layouts/layout'
import type { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'

const About = () => {
	return (
		<div className="container mx-auto my-4 p-4">
			<h2 className="mb-10 text-5xl font-bold">About us</h2>
			<div>
				<p className="text-lg leading-8 mb-8">
					Welcome to Bookworm, the ultimate destination for book lovers!<br />
					Developed using Next.js, our website offers a seamless experience
					for users to search for information on books, create their personalized
					reading lists, and share their valuable reviews with the community.
				</p>
				<p className="text-lg leading-8 mb-8">
					With Bookworm, you can dive into a vast world of literature, discovering new titles,
					authors, and genres. Our intuitive search feature allows you to explore a
					comprehensive database of books, making it easy to find the ones that
					pique your interest. Whether you&apos;re looking for a classic novel,
					a thrilling mystery, or a thought-provoking non-fiction, Bookworm has got you covered.
				</p>
				<p className="text-lg leading-8 mb-8">
					Once you&apos;ve found a book that captures your attention, you can add it
					to your personalized reading list. This feature ensures that you never
					forget about a book you want to read or lose track of your progress.
					You can conveniently access your reading list anytime, anywhere,
					and mark books as &quot;read&quot; once you&apos;ve completed them.
				</p>

				<p className="text-lg leading-8 mb-8">
					But that&apos;s not all! Bookworm is also a community-driven platform,
					where you can contribute your thoughts and insights through reviews.
					Share your opinions, rate books, and help fellow readers make informed choices.
					Engage in discussions, discover new perspectives, and connect with like-minded
					book enthusiasts from around the world.
				</p>
				<p className="text-lg leading-8 mb-8">
					At Bookworm, we believe that reading is a journey, and our mission is to make
					that journey even more enjoyable and interactive. Our user-friendly interface,
					coupled with advanced search capabilities, ensures a seamless and satisfying
					experience for every bookworm out there.
				</p>
				<p className="text-lg leading-8 mb-8">
					Join Bookworm today and embark on a literary adventure like never before. Happy reading!
				</p>
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
				<About />
			</div>
		</>
	)
}

Page.getLayout = getLayout

export default Page