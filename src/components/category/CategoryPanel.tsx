import CategoryCard from "./CategoryCard";
import {BiSolidPlanet, BiSolidBrain, BiSolidCastle, BiSolidPen} from "react-icons/bi";

/**
 * Category Panel Component
 * 
 * @returns {JSX.Element} Category Panel
 */
const CategoryPanel = () => {
	const categories = [
		{
			categoryName: "Science fiction",
			categorySlug: "science-fiction",
			icon: () => <BiSolidPlanet />,
			bgColor: "bg-primary",
		},
		{
			categoryName: "Fantasy",
			categorySlug: "fantasy",
			icon: () => <BiSolidCastle />,
			bgColor: "bg-secondary",
			bgHoverColor: "bg-secondary-focus",
		},
		{
			categoryName: "Philosophy",
			categorySlug: "philosophy",
			icon: () => <BiSolidBrain />,
			bgColor: "bg-accent",
			bgHoverColor: "bg-accent-focus",
		},
		{
			categoryName: "Novel",
			categorySlug: "novel",
			icon: () => <BiSolidPen />,
			bgColor: "bg-primary-focus",
			bgHoverColor: "bg-primary",
		},
	];

	return (
		<div className="py-8">
			<h2 className="text-3xl font-bold text-base-content mb-4">
				Featured categories
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				{categories.map((category, index) => (
					<CategoryCard
						key={index}
						categoryName={category.categoryName}
						categorySlug={category.categorySlug}
						icon={category.icon()}
						bgColor={category.bgColor}
					/>
				))}
			</div>
		</div>
	);
};

export default CategoryPanel;