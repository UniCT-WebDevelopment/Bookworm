import {BiSolidHeart, BiSolidChevronDownSquare, BiListPlus, BiSolidPen } from 'react-icons/bi';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

/**
 * Render book interaction panel.
 * 
 * @return {JSX.Element} Book interaction panel.
 */
const BookInteractionPanel = () => {
	const supabase = createClientComponentClient();
	const router = useRouter();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isFavorite, setIsFavorite] = useState(false);
	const [isRead, setIsRead] = useState(false);
	const [isInReadingList, setIsInReadingList] = useState(false);

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

	const handleAddToFavorite = () => {
		if (!isAuthenticated){
			router.push('/login');
			return;
		}

		setIsFavorite(!isFavorite);
	};
	
	const handleMarkAsRead = () => {
		if (!isAuthenticated){
			router.push('/login');
			return;
		}

		setIsRead(!isRead);
	};

	const handleAddToReadingList = () => {
		if (!isAuthenticated){
			router.push('/login');
			return;
		}

		setIsInReadingList(!isInReadingList);
	};

	
	return (
		<div className="grid grid-cols-2 sm:grid-cols-4 gap-8 bg-base-100 p-8 shadow-md rounded-md w-full items-center">
			<div className="flex flex-col items-center gap-2">
				<button onClick={handleAddToFavorite}>
					{isFavorite ? 'Favorite' : 'Add to favorite' }
					<BiSolidHeart className={`text-2xl mx-auto ${isFavorite ? 'text-secondary transition-colors ease-in-out duration-75' : ''}`} />
				</button>
			</div>
			<div className="flex flex-col items-center gap-2">
				<button onClick={handleMarkAsRead}>
					{isRead ? 'Read' : 'Mark as read' }
					<BiSolidChevronDownSquare className={`text-2xl mx-auto ${ isRead ? 'text-primary transition-colors ease-in-out duration-75' : '' }`} />
				</button>
			</div>
			<div className="flex flex-col items-center gap-2">
				<button onClick={handleAddToReadingList}>
					{isInReadingList ? 'In reading list' : 'Add to reading list' }
					<BiListPlus className={`text-3xl mx-auto ${ isInReadingList ? 'text-primary transition-colors ease-in-out duration-75' : ''}`} />
				</button>
			</div>
			<div className="flex flex-col items-center gap-2">
				<Link href="#review-box">
					Write a review
					<BiSolidPen className="text-2xl mx-auto" />
				</Link>
			</div>
		</div>
	);
};

export default BookInteractionPanel;