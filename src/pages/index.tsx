import { ReactElement } from 'react'
import Layout from '../layouts/layout'
import type { NextPageWithLayout } from './_app'
import Carousel from '@/components/Carousel'
import { useState, useEffect } from 'react'

export interface FetchedItemTypes {
	items: Array<{
		id: string
		volumeInfo: {
			title: string
			authors: string
			description: string
			imageLinks: {
				thumbnail: string
			}
			infoLink: string
		}
	}>
	kind: string
	totalItems: number
}

const Page: NextPageWithLayout = () => {
	const [items, setItems] = useState<FetchedItemTypes>({
		items: [],
		kind: '',
		totalItems: 0,
	})
	const [filteredItems, setFilteredItems] = useState([
		{
			id: '',
			title: '',
			authors: '',
			description: '',
			image: '',
			link: '',
		},
	])

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(
					`https://www.googleapis.com/books/v1/volumes?q=flowers&maxResults=40`,
				)
				const data = await response.json()
				setItems(data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchItems()
	}, [])

	useEffect(() => {
		if (items.totalItems > 0) {
			const filteredItems = items.items.map((item: any) => {
				console.log(item)
				return {
					id: item.id,
					title: item.volumeInfo.title,
					authors: item.volumeInfo.authors,
					description: item.volumeInfo.description,
					link: item.volumeInfo.infoLink,
				}
			})
			setFilteredItems(filteredItems)
		}
	}, [items])

	return (
		<main className="container">
			{filteredItems.length > 0 && (
				<Carousel title="" items={filteredItems} />
			)}
		</main>
	)
}

const getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>
}

Page.getLayout = getLayout

export default Page
