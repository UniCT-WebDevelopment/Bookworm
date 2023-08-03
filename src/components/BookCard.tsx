import Image from 'next/image';
import Link from 'next/link';
import BookPreview from '@/types/BookPreview';

/**
 * Render a book card
 * 
 * @param {BookPreview} book Book object
 * @return {JSX.Element} Book card component
 */
const BookCard = ({ book }: { book: BookPreview }) => {
	return (
		<div className="card card-side bg-base-100 shadow-xl">
			{book?.thumbnail && (
				<Image
					src={book.thumbnail}
					alt={book.title}
					width={book.thumbnail ? 128 : 0}
					height={book.thumbnail ? 192 : 0}
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
					<Link
						href={`/category/${book.category
							.toLowerCase()
							.replace(' ', '-')}`}
						key={book.category}
					>
						{book.category}
					</Link>
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
	);
};

export default BookCard;
