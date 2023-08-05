import {BiClipboard} from 'react-icons/bi';
import { useEffect, useState } from 'react';

/**
 * Share your ID panel
 * @param {string} userId - The user ID
 * 
 * @return {JSX.Element} - The Share your ID panel
 */
const ShareYourIDPanel = ( { userId } : { userId : string } ) => {
	const [copySuccess, setCopySuccess] = useState('');

	const copyToClipboard = () => {
		navigator.clipboard.writeText(userId);
		setCopySuccess('Copied!');
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setCopySuccess('');
		}, 2000);
		return () => clearTimeout(timer);
	}, [copySuccess]);

	return(
		<div className="shadow-md bg-base-200 p-8 h-fit w-full">
			<div>
				<h3 className="text-xl font-bold inline-block mb-2">
					Share your ID
				</h3>
				<span className="text-green-500 ml-2">{copySuccess}</span>
			</div>
			
			Share your ID with your friends and let them know what you&apos;re reading!
			<div className="bg-primary bg-opacity-25 py-2 px-4 rounded-sm flex justify-between mt-4">
				{userId}
				<button
					className="inline-block ml-2"
					onClick={copyToClipboard}
				>
					<BiClipboard className="text-neutral-content text-xl" />
				</button>
			</div>
		</div>
	);
};

export default ShareYourIDPanel;