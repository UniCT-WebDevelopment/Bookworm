/**
 * Book interface
 *
 * @property {string} id - Book id.
 * @property {string} isbn10 - Book ISBN-10.
 * @property {string} isbn13 - Book ISBN-13.
 * @property {string} etag - Book etag.
 * @property {string} title - Book title.
 * @property {string[]} authors - Book authors.
 * @property {string} publisher - Book publisher.
 * @property {string} publishedDate - Book published date.
 * @property {string} description - Book description.
 * @property {number} pageCount - Book page count.
 * @property {string[]} categories - Book categories.
 * @property {object} imageLinks - Book image links.
 * @property {string} imageLinks.smallThumbnail - Book small thumbnail.
 * @property {string} imageLinks.thumbnail - Book thumbnail.
 * @property {string} language - Book language.
 * @property {string} previewLink - Book preview link.
 * @property {string} infoLink - Book info link.
 */
interface Book {
	id: string
	isbn10: string
	isbn13: string
	etag: string
	title: string
	authors: string[]
	publisher: string
	publishedDate: string
	description: string
	pageCount: number
	categories: string[]
	imageLinks: {
		smallThumbnail: string
		thumbnail: string
	}
	language: string
	previewLink: string
	infoLink: string
}

export default Book
