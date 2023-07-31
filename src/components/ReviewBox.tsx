import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';

const ReviewBox = () => {
	const supabase = createClientComponentClient();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [numberOfCharacters, setNumberOfCharacters] = useState(0);

	useEffect(() => {
		const getUser = async () => {
			const { data: { user }} = await supabase.auth.getUser();

			if (!user){
				return;
			}

			setIsAuthenticated(true);
		}
		getUser();
	}, [supabase]);

	const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setNumberOfCharacters(event.target.value.length);
	};


	return (
		<>
			<h3 className='text-2xl font-bold mt-12 mb-2'>Write a review</h3>
			<div id='review-box' className='flex flex-col w-full gap-8 lg:flex-row'>
				{!isAuthenticated && (
					<textarea
						className="textarea w-full"
						placeholder="Please login to write a review."
						disabled
					>
					</textarea>
				)}
				{isAuthenticated && (
					<>
						<div className='relative w-full'>
							<textarea
								className="textarea w-full"
								placeholder="Something like 'I love this book because...' or 'I hate this book because...'"
								maxLength={500}
								onChange={handleReviewChange}
							>
							</textarea>
							<div className='absolute bottom-2 right-4'>
							<p className={`text-sm ${ numberOfCharacters >= 500 ? 'text-error' : 'text-base-content'}`}>
								{numberOfCharacters}/500
							</p>
						</div>
						</div>
						
					
						<button
							className='btn btn-accent text-base-100'
							disabled={numberOfCharacters === 0 || numberOfCharacters >= 500}
						>
							Submit
						</button>
						
					</>
				)}
			</div>
		</>
	);
};

export default ReviewBox;