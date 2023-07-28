import SignupFormProps from "@/types/SignupFormProps"
import { useEffect, useState } from "react"

const SignupForm = (
	{
		handleSignUp,
		setEmail,
		setPassword,
		setUsername,
		setRetypePassword,
		setFavoriteGenre,
		email,
		password,
		username,
		retypePassword,
		favoriteGenre,
		allowedGenres,
	} : SignupFormProps,
) => {
	const [notice, setNotice] = useState<string | null>(null);

	const checkInputs = () => {
		if (!email || !password || !username || !retypePassword) {
			setNotice('Please fill out all fields');
			return false;
		}

		if (password !== retypePassword) {
			setNotice('Passwords do not match.');
			return false;
		}

		return true;
	}

	useEffect(() => {
		const fadeInTimer = setTimeout(() => {
			setNotice(null);
		}
		, 3000);
		return () => clearTimeout(fadeInTimer);
	}, [notice]);

	return (
		<div className="form-control w-full">
			<h4 className="text-sm font-bold">
				You don&apos;t have an account?
			</h4>
			<h3 className="mb-4 text-2xl font-bold">Sign up</h3>
			<div className="flex flex-col md:flex-row gap-4">
				<div className="flex-grow">
				<label className="label">
					<span className="label-text">Email</span>
				</label>
				<input
					type="text"
					placeholder="Email"
					className="input input-bordered w-full"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required={true}
				/>
				</div>
				<div className="flex-grow">
					<label className="label">
						<span className="label-text">Username</span>
					</label>
					<input
						type="text"
						placeholder="Username"
						className="input input-bordered w-full max-w-xs"
						onChange={(e) => setUsername(e.target.value)}
						value={username}
						required={true}
					/>
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-4">
				<div className="flex-grow">
					<label className="label">
						<span className="label-text">Password</span>
					</label>
					<input
						type="password"
						placeholder="Password"
						className="input input-bordered w-full"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						required={true}
					/>
				</div>
				<div className="flex-grow">
					<label className="label">
						<span className="label-text">Confirm Password</span>
					</label>
					<input
						type="password"
						placeholder="Confirm Password"
						className="input input-bordered w-full"
						onChange={(e) => setRetypePassword(e.target.value)}
						value={retypePassword}
						required={true}
					/>
				</div>
			</div>
			<div>
				<label className="label">
					<span className="label-text">Favorite Genre</span>
				</label>
				<select className="select select-bordered w-full capitalize"
					onChange={(e) => setFavoriteGenre(e.target.value)}
					required={true}
				>
					{allowedGenres.map((genre) => (
						<option 
							key={genre}
							value={genre}
						>
							{genre}
						</option>
					))}
				</select>
				<div className="mt-4">
					<label className="label cursor-pointer justify-start">
						<input type="checkbox" className="checkbox checkbox-primary mr-2" />
						<span className="label-text">
							Fancy checkbox to agree to terms and conditions and privacy policy.
							No one reads this anyway.
						</span>
					</label>
					<label className="label cursor-pointer justify-start">
						<input type="checkbox" className="checkbox checkbox-primary mr-2" />
						<span className="label-text">
							Agree to join our cult and sacrifice your firstborn.
						</span>
					</label>
				</div>
				<button
					className={`btn btn-primary w-full mt-4 ${notice ? 'btn-error' : ''}`}
					onClick={(event) => {
						if (checkInputs()) {handleSignUp(event);}
					}}
				>
					{notice ? notice : 'Sign up'}
				</button>
			</div>
		</div>
	)
}

export default SignupForm
