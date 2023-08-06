import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import Link from "next/link";

import type Review from "@/types/Review";
/**
 * Renders last 10 reviews from a user.
 * 
 * @param {String} userId
 * 
 * @returns {JSX.Element}
 **/
const UserPublicReviews = ({ userId } : { userId : String }) => {
	const supabase = createClientComponentClient();
	const [publicReviews, setPublicReviews] = useState<Review[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	useEffect(() => {
		if( !userId || !supabase || isLoading || publicReviews.length > 0 || isLoaded ) return;

		const getReviews = async () => {
			setIsLoading(true);
			const { data: reviews, error } = await supabase.from('reviews').select('*').eq('user_id', userId).limit(10).order('created_at', { ascending: false });

			if(error){
				console.log(error);
				return;
			}

			setPublicReviews([
				...publicReviews,
				...reviews.map((review) => ({
					id: review.id,
					bookId: review.book_id,
					bookTitle: review.book_title,
					content: review.content,
					createdAt: review.created_at,
					updatedAt: review.updated_at,
					userId: review.user_id,
					userName: review.user_name
				})) as Review[]
			]
			);
			setIsLoading(false);
			setIsLoaded(true);
		};
		getReviews();
	}, [supabase, publicReviews, userId, isLoading, isLoaded]);

	return (
		<>
			<div>
				{publicReviews.length === 0 && (
					<p>
						Seems like there are no reviews yet.
					</p>
				)}
				{!isLoading && publicReviews.map((review, index) => (
					<div className="chat chat-start mb-4" key={review.id}>
						<div className={`chat-bubble ${ index & 1 ? 'chat-bubble-primary' : 'chat-bubble-secondary'}`}>
							{review.content}
							<div className="text-xs">
								About
								<Link href={`/book/${review.bookId}`} className="font-bold ml-1">
									{review.bookTitle}
								</Link>
								<br />
								On {new Date(review.createdAt)
									.toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'long',
										day: 'numeric',
										hour: 'numeric',
										minute: 'numeric'
									})
								}
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default UserPublicReviews;