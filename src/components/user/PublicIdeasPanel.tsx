import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import type Throught from '@/types/Throught';

const PublicIdeasPanel = ({userId} : { userId : string }) => {
	const supabase = createClientComponentClient();
	const [publicThroughts, setPublicThroughts] = useState<Throught[]>([]);
	const [notice, setNotice] = useState<string>('');

	useEffect(() => {
		if(!userId || !supabase || publicThroughts.length > 0) return;

		const getThroughs = async () => {
			const { data: throughts, error } = await supabase.from('throughts').select('*').eq('user_id', userId).limit(4).order('created_at', { ascending: false });

			if(error) {
				setNotice(`Error while fetching throughts: ${error.message}`
				);
				return;
			}

			setPublicThroughts([
				...publicThroughts,
				...throughts.map((throught) => {
					return {
						id: throught.id,
						userId: throught.user_id,
						content: throught.content,
						createdAt: throught.created_at,
					}
				})
			]);
		}
		getThroughs();
	}
	, [supabase, userId, publicThroughts]);

	return (
		<>
			{notice && <p>{notice}</p>}
			{publicThroughts.length === 0 && <p>This user has no public throughts.</p>}
			{publicThroughts.map((throught, index) => {
				return (
					<div key={throught.id} className="chat chat-start mb-2">
						<div className={`chat-bubble ${ index & 1 ? 'chat-bubble-accent text-base-content' : 'chat-bubble-base'}`}>
							<p className="mb-2">{throught.content}</p>
							<p className="text-xs">
								On {new Date(throught.createdAt)
									.toLocaleDateString('en-US', {
										year: 'numeric',
										month: 'long',
										day: 'numeric',
										hour: 'numeric',
										minute: 'numeric'
									})
								}
							</p>
						</div>
					</div>
				);
			}
			)}
		</>
	);
};

export default PublicIdeasPanel;