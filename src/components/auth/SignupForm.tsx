import SignupFormProps from "@/types/SignupFormProps"

const SignupForm = (
	{
		handleSignUp,
		setEmail,
		setPassword,
		setUsername,
		email,
		password,
		username,
	} : SignupFormProps
) => {

	return (
		<div className="form-control w-full max-w-xs">
			<h4 className="text-sm font-bold">
				You don&apos;t have an account?
			</h4>
			<h3 className="mb-4 text-2xl font-bold">Sign up</h3>
			<label className="label">
				<span className="label-text">Email</span>
			</label>
			<input
				type="text"
				placeholder="Email"
				className="input input-bordered w-full max-w-xs"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
			/>
			<label className="label">
				<span className="label-text">Username</span>
			</label>
			<input
				type="text"
				placeholder="Username"
				className="input input-bordered w-full max-w-xs"
				onChange={(e) => setUsername(e.target.value)}
				value={username}
			/>
			<label className="label">
				<span className="label-text">Password</span>
			</label>
			<input
				type="password"
				placeholder="Password"
				className="input input-bordered w-full max-w-xs"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
			/>

			<label className="label">
				<span className="label-text">Confirm Password</span>
			</label>
			<input
				type="password"
				placeholder="Confirm Password"
				className="input input-bordered w-full max-w-xs"
			/>
			<button
				className="btn btn-primary w-full max-w-xs mt-4"
				onClick={handleSignUp}
			>
				Sign up
			</button>
		</div>
	)
}

export default SignupForm
