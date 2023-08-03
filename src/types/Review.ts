/**
 * Review interface
 *
 * @property {number} id - Review id
 * @property {number} userId - User id
 * @property {number} bookId - Book id
 * @property {string} userName - User name
 * @property {string} createdAt - Review creation date
 * @property {string} content - Review content
 *
 */

interface Review {
	id: number
	userId: number
	bookId: number
	userName: string
	createdAt: string
	content: string
}

export default Review
