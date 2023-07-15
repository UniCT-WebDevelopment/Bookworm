interface Book {
	id: string;
	etag: string;
	title: string;
	authors: string[];
	publisher: string;
	publishedDate: string;
	description: string;
	pageCount: number;
	categories: string[];
	imageLinks: {
		smallThumbnail: string;
		thumbnail: string;
	};
	language: string;
	previewLink: string;
	infoLink: string;
};

export default Book;