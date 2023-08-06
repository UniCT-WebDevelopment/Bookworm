import { BiSolidRocket, BiSolidHeart, BiSolidChurch, BiSolidCoffeeTogo, BiSolidCookie} from 'react-icons/bi';
const BadgesPanel = () => {
	const badges = [
		{
			name: 'Early Access',
			description: 'Joined the platform before the official release',
			icon: <BiSolidRocket className='text-xl'/>
		},
		{
			name: 'Devoted',
			description: 'Sacrifice his/her first born to the devs',
			icon: <BiSolidHeart className='text-xl'/>
		},
		{
			name: 'Cult Leader',
			description: 'Created a cult around the platform',
			icon: <BiSolidChurch className='text-xl'/>
		},
		{
			name: 'Caffeinated',
			description: 'Do nothing special but I really like this icon and I want to use it',
			icon: <BiSolidCoffeeTogo className='text-xl'/>
		},
		{
			name: 'Cookie lover',
			description: 'Everyone loves cookies',
			icon: <BiSolidCookie className='text-xl'/>
		}
	];

	return (
		<div className='bg-base-200 mt-4 p-8 bg-opacity-25 shadow-sm rounded-sm'>
			{badges.map((badge,index) => {
				return (
					<div className='flex items-center justify-between mb-2' key={index}>
						<div className='flex items-center'>
							{badge.icon}
							<div className='ml-2'>
								<p className='text-lg'>{badge.name}</p>
								<p className='text-sm'>{badge.description}</p>
							</div>
						</div>
					</div>
				);
			}
			)}
		</div>
	);
};

export default BadgesPanel;