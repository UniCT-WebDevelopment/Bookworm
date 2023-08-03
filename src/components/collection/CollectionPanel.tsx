import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import {BiChevronLeft, BiChevronRight} from 'react-icons/bi';
import type Collection from '@/types/Collection';
import type CollectionBook from '@/types/CollectionBook';
import CollectionCard from './CollectionCard';

/**
 * Collection Panel Component
 * 
 * @returns {JSX.Element} Collection Panel
 */
const CollectionPanel = () => {
	const supabase = createClientComponentClient();
	const [collections, setCollections] = useState<Collection[]>([]);
	const [collectionBooks, setCollectionBooks] = useState<CollectionBook[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	// Restore collections from local storage.
	useEffect(() => {
		if(localStorage.getItem('collections')) {
			setCollections(JSON.parse(localStorage.getItem('collections') || '[]'));
		}
		if(localStorage.getItem('collectionBooks')) {
			setCollectionBooks(JSON.parse(localStorage.getItem('collectionBooks') || '[]'));
		}
	}, []);

	useEffect(() => {
		if(!supabase || collections.length > 0) return;

		const getCollection = async () => {
			const { data: collections, error } = await supabase
				.from('collections')
				.select('*');
			
			if (error) {
				return
			}
			setCollections(collections);
			localStorage.setItem('collections', JSON.stringify(collections));
		};
		getCollection();
	}, [supabase, collections]);

	useEffect(() => {
		if(collections.length === 0 || !supabase || collectionBooks.length > 0 || isLoading ) return;

		const getCollectionBooks = async () => {
			setIsLoading(true);
			const { data: books, error } = await supabase
				.from('collection_book_associations').select(
					`book_id, collection_id, 
					books ( * )`
				);
			
			if (error || !books) {
				return
			}

			books.map(( book ) => {
				setCollectionBooks((collectionBooks) => [
					...collectionBooks,
					{
						bookId: book.book_id,
						collectionId: book.collection_id,
						/** @ts-ignore */
						bookApiId: book.books.api_id,
						/** @ts-ignore */
						title: book.books.title,
						/** @ts-ignore */
						authors: book.books.authors,
						/** @ts-ignore */
						category: book.books.categories,
						/** @ts-ignore */
						image: book.books.hq_image
					},
				]);
			});
			setIsLoading(false);
		};

		getCollectionBooks();
	}, [collectionBooks, collections, supabase, isLoading]);

	useEffect(() => {
		if(collectionBooks.length > 0) {
			localStorage.setItem('collectionBooks', JSON.stringify(collectionBooks));
		}
	}, [collectionBooks]);

	return (
		<div>
			<h3 className='text-3xl font-bold mb-4'>
				Featured Collections
			</h3>
			{collections.map((collection) => (
				<div key={collection.id}>
					<h3 className='text-2xl font-bold mb-4'>
						{collection.name}
					</h3>
					<div className='carousel w-full mb-12'>
						{collectionBooks.map((book) => (
							book.collectionId === collection.id && (
								<CollectionCard
									key={book.bookId}
									bookId={book.bookId}
									bookApiId={book.bookApiId}
									collectionId={book.collectionId}
									title={book.title}
									authors={book.authors}
									category={book.category}
									image={book.image}
								/>
							)
						))
						}
					</div>
				</div>
			))}
		</div>
	);
};

export default CollectionPanel;