import type User from '@/types/User';
import Link from 'next/link';

const CommunityCard = ({user} : {user : User}) => {
	return (
		<Link href={`/user/${user.id}`}>
			<div className='p-4 bg-base-200 rounded-md shadow-md hover:transition-transform hover:scale-105'>
				<h2 className='text-lg font-bold'>{user.username}</h2>
				<p className='text-sm text-base-content'>
					Favorite genre: {user.favoriteGenre}
				</p>
			</div>
		</Link>
	)
};

export default CommunityCard;