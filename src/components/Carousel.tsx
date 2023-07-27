import Book from "@/types/Book";
import Image from "next/image";
import Link from "next/link";

/**
 * Carousel component
 * 
 * @param title category title
 * @param books books to display
 * 
 * @returns {JSX.Element} Carousel component
 */
const Carouser = ({title, books} : {title:string, books: Book[]}) => {
	if(!books.length) return null;

	return (
		<div className="container mx-auto my-4">
			<h2 className="text-2xl font-bold mb-4 capitalize">{title}</h2>
			<div className="carousel carousel-end">
				{
					books.map((book) => (
						book.imageLinks?.thumbnail && (
							<div className="carousel-item relative cursor-pointer" key={book.etag}>
								<Link href={`/book/${book.id}`}>
									<figure>
										<Image
											src={book.imageLinks?.thumbnail}
											alt={book.title}
											width={300}
											height={300}
											style={{objectFit: 'fill'}}
											className="h-full"
										/>
									</figure>
									<div className="carousel-item-caption flex items-center justify-center absolute bottom-0 w-full h-full bg-base-200 hover:bg-primary hover:bg-opacity-50 bg-opacity-50">
										<div className="p-8">
											<h3 className="text-xl font-bold">{book.title}</h3>
											<p className="text-sm">{book.authors?.join(', ')}</p>
										</div>
									</div>
									{process.env.NODE_ENV === 'development' && (
										<div className="absolute top-0 left-0 p-2 text-xs bg-primary bg-opacity-50 text-white">
											{book.id}
										</div>
									)}
								</Link>
							</div>
						)
					))
				}
			</div>
		</div>
	);
};

export default Carouser;