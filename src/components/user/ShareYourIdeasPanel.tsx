import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

/**
 * Share your ideas panel.
 * 
 * @param {String} userId User id.
 * @return {JSX.Element} Share your ideas panel.
 */
const ShareYourIdeasPanel = ({userId}:{userId : string}) => {
	const supabase = createClientComponentClient();
	const [throught, setThrought] = useState('');
	const [notice, setNotice] = useState('');

	useEffect(() => {
		if(!notice) return;
		const timeout = setTimeout(() => {
			setNotice('');
		}, 2000);

		return () => clearTimeout(timeout);
	}
	, [notice]);

	const insertThought = async () => {
		if( ! throught ) {
			setNotice('Please write something first.');
			return;
		}

		const { data, error } = await supabase.from('throughts').insert([
			{ user_id: userId, content: throught },
		]);

		if(error) {
			setNotice(
				`Something went wrong, please try again.
					${error.message}
				`
			);
			return;
		}

		setNotice('Your thought has been shared.');
		setThrought('');
	};

	return(
		<div className="bg-base-200 p-8 rounded-sm shadow-sm">
			<h3 className='text-xl font-bold mb-2'>
				Share throungs about books with others
			</h3>
			<p className='mb-2'>
				Every day is a good day to read a book!<br />
				Share your throughs about new books with others.
			</p>
			<div className="form-control">
				<div className="relative">
					<textarea
						className="textarea h-24 w-full textarea-bordered bg-primary bg-opacity-25 resize-none"
						placeholder="Write your thought here..."
						onChange={(e) => setThrought(e.target.value)}
						maxLength={200}
						value={throught}
					>
					</textarea>
					<div className="text-xs absolute bottom-4 right-2">
						<span className={throught.length >= 200 ? 'text-red-500' : ''}>
							{throught.length}/200
						</span>
					</div>
				</div>
				<button
					className="btn btn-primary mt-4"
					onClick={insertThought}
				>
					Share your thought
				</button>
				
			</div>
			{notice && (
				<div className='mt-4'>
					{notice}
				</div>
			)}
		</div>
	);
};

export default ShareYourIdeasPanel;