import Link from 'next/link'
/**
 * This component is the login form
 *
 * @returns {JSX.Element} The login form
 */
const LoginForm = (props: any) => {
	const { handleSignIn, setEmail, email, setPassword, password } = props

	return (
		<div className="form-control w-full max-w-xs">
			<h3 className="mb-4 text-2xl font-bold">Sign in</h3>
			<label className="label">
				<span className="label-text">Email</span>
			</label>
			<input
				type="text"
				placeholder="Email"
				className="input input-bordered w-full max-w-xs"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label className="label">
				<span className="label-text">Password</span>
			</label>
			<input
				type="password"
				placeholder="Password"
				className="input input-bordered w-full max-w-xs"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button
				className="btn btn-primary w-full max-w-xs mt-4"
				onClick={handleSignIn}
			>
				Sign in
			</button>
			<p className="mt-4">
				You don&apos;t have an account?
				<Link
					href="/signup"
					className="cursor-pointer px-2 text-primary"
				>
					{' '}
					Signup{' '}
				</Link>
			</p>
		</div>
	)
}

export default LoginForm
