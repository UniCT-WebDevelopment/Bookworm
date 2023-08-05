import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import type User from '@/types/User';
/**
 * ReviewBox component
 * 
 * @return {JSX.Element} ReviewBox component
 */
const ReviewBox = ( { bookId, bookTitle }:{ bookId : string|undefined, bookTitle : string } ) => {
	const supabase = createClientComponentClient();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [numberOfCharacters, setNumberOfCharacters] = useState(0);
	const [review, setReview] = useState('');
	const [user, setUser] = useState<User | null>(null);
	const [reviewInserted, setReviewInserted] = useState(false);

	useEffect(() => {
		const getUser = async () => {
			const { data: { user }} = await supabase.auth.getUser();

			if (!user){
				return;
			}

			setIsAuthenticated(true);
			setUser({
				id: user.id,
				email: user.email ? user.email : '',
				username: user.user_metadata.username,
				favoriteGenre: user.user_metadata.favorite_genre
			});
		};
		getUser();
	}, [supabase]);

	const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setNumberOfCharacters(event.target.value.length);
		setReview(event.target.value);
	};

	const handleSubmit = async () => {
		if( !review || review.length === 0 || review.length > 500 || !user || !bookId ){
			return;
		}

		setReviewInserted(true);

		const { data, error } = await supabase.from('reviews').insert([
			{
				user_id: user.id,
				book_id: bookId,
				book_title: bookTitle,
				content: review,
				username: user.username
			}
		]);
	}

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
				{isAuthenticated && !reviewInserted && (
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
							disabled={numberOfCharacters === 0 || numberOfCharacters >= 500 || reviewInserted }
							onClick={handleSubmit}
						>
							Submit
						</button>
						
					</>
				)}
				{isAuthenticated && reviewInserted && (
					<div className='flex flex-col gap-4'>
						<p className='text-base-content'>
							Thank you for your review!
						</p>
						<button
							className='btn btn-accent text-base-100'
							onClick={() => setReviewInserted(false)}
						>
							Write another review
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default ReviewBox;