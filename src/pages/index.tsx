import { ReactElement, useEffect, useMemo, useState } from 'react'
import Layout from '../layouts/layout'
import type { NextPageWithLayout } from './_app'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel';
import Book from '@/types/Book';

import CategoryPanel from '@/components/category/CategoryPanel';
import CollectionPanel from '@/components/collection/CollectionPanel';

const Home = () => {
	const [books, setBooks] = useState<Book[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const categories = useMemo(() => [
		'classics',
		'fiction',
		'fantasy',
		'thriller',
		'horror',
		'science fiction',
		'history',
		'comics',
		'art',
		'adventure',
	], []);

	useEffect(() => {
		if(!loading || books.length > 0) return;
		setLoading(true);
		setBooks([]);
		const fetchBooks = async () => {
			categories.map(async (category) => {
				const res = await fetch(
					`${process.env.GOOGLE_BOOKS_API_VOLUMES_URL}/?q=subject:${category}&maxResults=18&langRestrict=en`,
				);
				const data = await res.json();
				data?.items?.map((item: any) => {
					setBooks((books) => [
						...books,
						{
							id: item.id,
							isbn10: '',
							isbn13: '',
							etag: item.etag,
							title: item.volumeInfo.title,
							authors: item.volumeInfo.authors,
							publisher: item.volumeInfo.publisher,
							publishedDate: item.volumeInfo.publishedDate,
							description: item.volumeInfo.description,
							pageCount: item.volumeInfo.pageCount,
							categories: [category],
							imageLinks: item.volumeInfo.imageLinks,
							language: item.volumeInfo.language,
							previewLink: item.volumeInfo.previewLink,
							infoLink: item.volumeInfo.infoLink,
						},
					]);
				});
			});
		};
		fetchBooks();
		setLoading(false);
	}, [loading, books, categories]);

	return (
		<>
			<Hero />

			<CategoryPanel />
			<CollectionPanel />
			<div className="container mx-auto my-4">
				<h2 className="text-3xl font-bold mb-4">
					Explore by category
				</h2>
				{books.length > 0 && (
					<>
						{categories.map((category) => (
							<Carousel
								key={category}
								title={category}
								books={books.filter((book) =>
									book.categories?.includes(category),
								)}
							/>
						))}
					</>
				)}
			</div>
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
