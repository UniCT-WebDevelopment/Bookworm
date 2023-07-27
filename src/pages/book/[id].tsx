import { NextPageWithLayout } from '../_app';
import { ReactElement, useEffect, useState } from 'react';
import Layout from '../../layouts/layout';
import { useRouter } from 'next/router';
import Book from '@/types/Book';
import Image from 'next/image';
import Link from 'next/link';

const BookPage = () => {
	const [book, setBook] = useState<Book | null>(null);
	const router = useRouter();
	const { id } = router.query;

	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [hqImage, setHqImage] = useState<string>('');

	const excludeKeys = ['id', 'etag', 'imageLinks', 'previewLink', 'infoLink', 'authors', 'title', 'description'];

	useEffect(() => {
		if(!id || loading || book ) return;

		const fetchBook = async () => {
			setLoading(true);
			try{
				console.log(id);
				const res = await fetch(
					`${process.env.GOOGLE_BOOKS_API_VOLUMES_URL}/${id}`,
				);
				const data = await res.json();
				console.log(data);

				console.log(data);
				if(!data || data.error){
					setError(true);
					return;
				}

				setBook({
					id: data.id,
					etag: data.etag,
					isbn10: data.volumeInfo.industryIdentifiers[0].identifier,
					isbn13: data.volumeInfo.industryIdentifiers[1].identifier,
					title: data.volumeInfo.title,
					authors: data.volumeInfo.authors,
					publisher: data.volumeInfo.publisher,
					publishedDate: data.volumeInfo.publishedDate,
					description: data.volumeInfo.description,
					pageCount: data.volumeInfo.pageCount,
					categories: data.volumeInfo.categories,
					imageLinks: data.volumeInfo.imageLinks,
					language: data.volumeInfo.language,
					previewLink: data.volumeInfo.previewLink,
					infoLink: data.volumeInfo.infoLink,
				});
			}
			catch(error){
				setError(true);
				console.error(error);
			}
			setLoading(false);
		}
		fetchBook();
	}, [book, id, loading])

	//Redirect to 404 page in case of error or if book is not found
	useEffect(() => {
		if(error){
			router.push('/404');
		}
	}, [error, router])

	useEffect(() => {
		if(!book) return;
		
		setHqImage(process.env.GOOGLE_BOOKS_API_FRONT_COVER_URL + '/' + book.id + '?fife=w400-h600&source=gbs_api');
	}, [book]);

	return (
		<>
			<div>
				<div className="flex flex-col w-full lg:flex-row">
					<div className="grid flex-grow place-items-center">
						{book && hqImage && (
							<Image
								src={hqImage}
								width={300}
								height={400}
								alt={book.title}
							/>
						)}
					</div>
					<div className="grid md:basis-2/3">
						{book && (
							<h1 className='text-2xl font-bold'>
								{book.title}
							</h1>
						)}
						{book && book.authors && (
							<p className="text-md mb-10">
								by {book.authors.join(', ')}
							</p>
						)}
						{book && book.description && (
							<p className="text-md mb-10">
								{book.description}
							</p>
						)}
					</div>
				</div>
				<div className="overflow-x-auto">
							<table className="table">
								<tbody>
									{
										book && (
											<>
											{Object.keys(book).map((key) => { 
												if(excludeKeys.includes(key) || !book[key as keyof Book]) return;
												return (
													<tr key={key} className='hover'>
														<td className="font-bold">{key}</td>
														<td>
															{book[key as keyof Book]}
														</td>
													</tr>
												)
											})}
											</>
										)
									}
								</tbody>
							</table>
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
				<BookPage />
			</div>
		</>
	)
}

Page.getLayout = getLayout

export default Page