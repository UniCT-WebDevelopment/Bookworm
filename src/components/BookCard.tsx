import Image from 'next/image';
import Link from 'next/link';
import Book from '@/types/Book';

/**
 * Render a book card
 * 
 * @param {Book} book Book object
 * @return {JSX.Element} Book card component
 */
const BookCard = ({ book }: { book: Book }) => {
	return (
		<div className="card card-side bg-base-100 shadow-xl">
			{book.imageLinks && (
				<Image
					src={book.imageLinks?.thumbnail}
					alt={book.title}
					width={book.imageLinks.thumbnail ? 128 : 0}
					height={book.imageLinks?.thumbnail ? 192 : 0}
				/>
			)}
			<div className="card-body">
				<h2 className="card-title items-start text-ellipsis break-words overflow-hidden leading-8 max-h-16">
					{book.title}
				</h2>
				<p className='leading-2'>
					{book.authors?.join(', ')}
				</p>
				<p>
					{book.categories?.map((category) => (
						<Link
							href={`/category/${category
								.toLowerCase()
								.replace(' ', '-')}`}
							key={category}
						>
							{category}
						</Link>
					))}
				</p>
				<div className="card-actions justify-end">
					<Link href={`/book/${book.id}`}>
						<button className="btn btn-primary">
							Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default BookCard
