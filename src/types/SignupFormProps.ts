/**
 * SignupFormProps type.
 * @typedef {Object} SignupFormProps
 *
 * @property {MouseEventHandler<HTMLButtonElement>} handleSignUp - Handles the signup button click.
 * @property {string} email - The email input value.
 * @property {string} password - The password input value.
 * @property {string} username - The username input value.
 * @property {(email: string) => void} setEmail - Sets the email input value.
 * @property {(password: string) => void} setPassword - Sets the password input value.
 * @property {(username: string) => void} setUsername - Sets the username input value.
 */
import { MouseEventHandler } from 'react'

interface SignupFormProps {
	handleSignUp: MouseEventHandler<HTMLButtonElement>
	email: string
	password: string
	username: string
	setEmail: (email: string) => void
	setPassword: (password: string) => void
	setUsername: (username: string) => void
}

export default SignupFormProps
