import React, { ReactElement, useEffect, useState } from 'react'
import Layout from '../layouts/layout'
import { NextPageWithLayout } from './_app'
import { useRouter } from 'next/router'
import Book from '@/types/Book'
import BookCard from '@/components/BookCard'

/**
 * Search Page Component
 * Execute a search query and display the results
 *
 * @returns {JSX.Element} The search page
 */
const Search = () => {
	const router = useRouter()
	const { query } = router
	const { q } = query

	const [books, setBooks] = useState<Book[]>([])

	useEffect(() => {
		if (!q) return
		setBooks([])
		const search = async () => {
			const res = await fetch(
				`${process.env.GOOGLE_BOOKS_API_VOLUMES_URL}?q=${q}`,
			)
			const data = await res.json()
			data.items.map((item: any) => {
				console.log(item)
				setBooks((books) => [
					...books,
					{
						id: item.id,
						etag: item.etag,
						title: item.volumeInfo.title,
						isbn10: item.volumeInfo.industryIdentifiers[0].identifier,
						isbn13: item.volumeInfo.industryIdentifiers[1].identifier,
						authors: item.volumeInfo.authors,
						publisher: item.volumeInfo.publisher,
						publishedDate: item.volumeInfo.publishedDate,
						description: item.volumeInfo.description,
						pageCount: item.volumeInfo.pageCount,
						categories: item.volumeInfo.categories,
						imageLinks: item.volumeInfo.imageLinks,
						language: item.volumeInfo.language,
						previewLink: item.volumeInfo.previewLink,
						infoLink: item.volumeInfo.infoLink,
					},
				])
			})
		}
		search()
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
