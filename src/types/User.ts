/**
 * User type
 *
 * @typedef {Object} User
 *
 * @property {string} id - The user id.
 * @property {string} username - The user username.
 * @property {string} email - The user email.
 * @property {string} favoriteGenre - The user favorite genre.
 *
 */
interface User {
	id: string
	username: string
	email: string
	favoriteGenre: string
}

export default User
