import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

import type Review from "@/types/Review";

const PublicReviews = ({bookId} : {bookId : string|undefined}) => {
	const supabase = createClientComponentClient();
	const [publicReviews, setPublicReviews] = useState<Review[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if( !bookId || !supabase || isLoading || publicReviews.length > 0) return;

		const getReviews = async () => {
			setIsLoading(true);
			const { data: reviews, error } = await supabase.from('reviews').select('*').eq('book_id', bookId);

			if(error){
				console.log(error);
				return;
			}

			reviews.map((review) => {
				setPublicReviews(
					(prevPublicReviews) => [...prevPublicReviews, {
						id: review.id,
						bookId: review.book_id,
						userId: review.user_id,
						userName: review.username,
						bookTitle: review.book_title,
						content: review.content,
						createdAt: review.created_at
					}]
				);
			});

			setIsLoading(false);
		};
		getReviews();
	}, [supabase, bookId, publicReviews, isLoading]);

	return (
		<div className="bg-base-200 p-8 mt-8">
			<h3 className='text-xl font-bold'>
				Take a look at what others are saying
			</h3>
			<p className='font-bold text-sm'>
				But pay attention to spoilers! *
			</p>
			<p className='font-bold text-sm mb-4'>
				And dont forget to leave your own review! **
			</p>

			<div>
				{publicReviews.length === 0 && (
					<p>
						Seems like there are no reviews yet. Be the first one to leave a review!
					</p>
				)}
				{publicReviews.map((review) => (
					<div key={review.id}>
						<p className="font-bold mb-2">
							{review.userName} on {new Date(review.createdAt)
								.toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								})
							}
						</p>
						<div className="chat chat-start">
							<div className="chat-bubble chat-bubble-secondary">
								{review.content}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PublicReviews;