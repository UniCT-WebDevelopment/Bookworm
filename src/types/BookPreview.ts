/**
 * BookPreview interface.
 * Represents a book preview, with only the most important information.
 *
 * @property {string} id - Book id.
 * @property {string} etag - Book etag.
 * @property {string} title - Book title.
 * @property {string[]} authors - Book authors.
 * @property {string} category - Book category.
 * @property {string} thumbnail - Book thumbnail.
 */
interface BookPreview {
	id: string
	etag: string
	title: string
	authors: string[]
	category: string
	thumbnail: string
}

export default BookPreview
