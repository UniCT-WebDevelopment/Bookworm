import React, { ReactElement, useEffect, useState } from 'react';
import Layout from '../layouts/layout';
import { NextPageWithLayout } from './_app';
import { useRouter } from 'next/router';
import BookPreview from '@/types/BookPreview';
import BookCard from '@/components/BookCard';

/**
 * Search Page Component
 * Execute a search query and display the results
 *
 * @returns {JSX.Element} The search page
 */
const Search = () => {
	const router = useRouter();
	const { query } = router;
	const { q } = query;

	const [books, setBooks] = useState<BookPreview[]>([]);

	useEffect(() => {
		// If there is no query, return.
		if (!q) return;

		// Clear books state. 
		// Prevent new search results from being appended to the previus ones.
		setBooks([]);

		const search = async () => {
			const res = await fetch(
				`${process.env.GOOGLE_BOOKS_API_VOLUMES_URL}?q=${q}`,
			);

			const data = await res.json()
			data.items.map((item: any) => {
				setBooks((books) => [
					...books,
					{
						id: item.id,
						etag: item.etag,
						title: item.volumeInfo.title,
						authors: item.volumeInfo.authors,
						category: item.volumeInfo.categories ? item.volumeInfo.categories[0] : '',
						thumbnail: item.volumeInfo.imageLinks?.thumbnail,
					},
				]);
			});
		}
		search();
	}, [q])

	return (
		<>
			<h2 className="text-3xl font-bold">Results for: {q}</h2>
			<div className="container grid gap-8 py-4 md:grid-cols-2 2xl:grid-cols-3">
				{books.map((book) => (
					<BookCard book={book} key={book.etag} />
				))}
			</div>
		</>
	)
}

const getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>
}

const Page: NextPageWithLayout = () => {
	return (
		<>
			<div>
				<Search />
			</div>
		</>
	)
}

Page.getLayout = getLayout

export default Page
