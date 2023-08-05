/**
 * SignupFormProps type.
 * @typedef {Object} SignupFormProps
 *
 * @property {MouseEventHandler<HTMLButtonElement>} handleSignUp - Handles the signup button click.
 * @property {string} email - The email input value.
 * @property {string} password - The password input value.
 * @property {string} retypePassword - The retype password input value.
 * @property {string} username - The username input value.
 * @property {string} favoriteGenre - The favorite genre input value.
 * @property {string[]} allowedGenres - The allowed genres input value.
 * @property {(email: string) => void} setEmail - Sets the email input value.
 * @property {(password: string) => void} setPassword - Sets the password input value.
 * @property {(username: string) => void} setUsername - Sets the username input value.
 * @property {(retypePassword: string) => void} setRetypePassword - Sets the retype password input value.
 * @property {(favoriteGenre: string) => void} setFavoriteGenre - Sets the favorite genre input value.
 */
import { MouseEventHandler } from 'react'

interface SignupFormProps {
	handleSignUp: MouseEventHandler<HTMLButtonElement>
	email: string
	password: string
	retypePassword: string
	username: string
	favoriteGenre: string
	allowedGenres: string[]
	setEmail: (email: string) => void
	setPassword: (password: string) => void
	setUsername: (username: string) => void
	setRetypePassword: (retypePassword: string) => void
	setFavoriteGenre: (favoriteGenre: string) => void
	error: string
}

export default SignupFormProps
