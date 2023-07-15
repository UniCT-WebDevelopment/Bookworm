import Image from "next/image";
import Book from "@/types/Book";
import Link from "next/link";

const BookCard = ({ book }: { book: Book }) => {
	return (
		<div className="card card-side bg-base-100 shadow-xl">
			{book.imageLinks && (
				<Image src={book.imageLinks?.thumbnail} alt={book.title} width={book.imageLinks.thumbnail ? 128 : 0} height={book.imageLinks?.thumbnail ? 192 : 0} />
			)}
			<div className="card-body">
				<h2 className="card-title">
					{book.title}
				</h2>
				<p>
					{book.authors?.join(', ')}
				</p>
				<p>
					{book.categories?.map((category) => (
						<Link href={`/category/${category.toLowerCase().replace(' ', '-')}`} key={category}>
							{category}
						</Link>
					))}
				</p>
				<div className="card-actions justify-end">
				<button className="btn btn-primary">Details</button>
				</div>
			</div>
		</div>
	);
};

export default BookCard;