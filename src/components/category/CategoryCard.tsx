import Link from 'next/link';

interface CategoryCardProps {
	categoryName: string;
	categorySlug: string;
	icon: JSX.Element;
	bgColor: string;
};

const CategoryCard = ({
	categoryName,
	categorySlug,
	icon,
	bgColor,
} : CategoryCardProps ) => {
	return (
		<Link href={`/category/${categorySlug}`}>
			<div className={`${bgColor} cursor-pointer shadow-sm hover:shadow-lg h-44 2xl:h-64 p-8 rounded-sm relative`}>
				<h3 className="text-xl font-bold text-base-100 flex justify-between">
					{categoryName}
					<div className="text-5xl">
						{icon}
					</div>
				</h3>
			</div>
		</Link>
	);
};

export default CategoryCard;