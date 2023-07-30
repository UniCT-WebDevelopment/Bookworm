/**
 * Renders side info about user and his/her books.
 * 
 * @return {JSX.Element} Info about user and his/her books.
 */
const SideInfo = () => {
	// TODO: make this editable
	const sections = [
		{
			key: 'favorite-books',
			title: 'Favorite books',
			content: [''],
		},
		{
			key: 'wishlist',
			title: 'Wishlist',
			content: [''],
		},
		{
			key: 'reading-now',
			title: 'Reading now',
			content: [''],
		},
		{
			key: 'read',
			title: 'Read',
			content: [''],
		},
		{
			key: 'favorite-authors',
			title: 'Favorite authors',
			content: [''],
		},
		{
			key: 'favorite-quotes',
			title: 'Favorite quotes',
			content: [''],
		},
		{
			key: 'favorite-characters',
			title: 'Favorite characters',
			content: [''],
		},
		{
			key: 'top-chart',
			title: 'Top chart',
			content: [''],
		},
		{
			key: 'book-vs-movie',
			title: 'Book vs movie',
			content: [''],
		},
		{
			key: 'favorite-bookstore',
			title: 'Favorite bookstore',
			content: [''],
		},
	];

	return (
		<>
			{sections.map((section) => (
				<div key={section.key} className="collapse bg-base-200 mb-4">
					<input type="checkbox" />
					<div className="collapse-title text-xl font-medium">
						{section.title}
					</div>
					<div className="collapse-content">
						{section.content.map((item) => (
							<p key={item}>{item}</p>
						))}
					</div>
				</div>
			))}
		</>
	);
};

export default SideInfo;