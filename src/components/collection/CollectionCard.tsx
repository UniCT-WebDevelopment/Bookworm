import Link from "next/link";
import Image from "next/image";

import type CollectionBook from "@/types/CollectionBook";

/**
 * Render Collection Card
 * 
 * @param {CollectionBook} props - Collection Book
 */
const CollectionCard = ({
	bookApiId,
	title,
	image,
 }: CollectionBook) => {
	return (
		<div className="carousel-item cursor-pointer h-96 xl:w-1/4" key={bookApiId}>
			<Link href={`/book/${bookApiId}`}>
				<Image
					src={image}
					alt={title}
					width={250}
					height={320}
					className="object-cover h-full w-full"
				/>
				{process.env.NODE_ENV === 'development' && (
					<div className="absolute top-0 left-0 p-2 text-xs bg-primary bg-opacity-50 text-white">
						{bookApiId}
					</div>
				)}
			</Link>
		</div>
	);
};

export default CollectionCard;