import Link from 'next/link';
import { useEffect, useState } from 'react';

const Hero = () => {
	const [currentText, setCurrentText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);
	const text = 'Discover and share new books. Track your reading progress, add notes, and get book recommendations. All in one place.';
	const delay = 80;
	
	useEffect(() => {
		if (currentIndex < text.length) {
			const timeout = setTimeout(() => {
			setCurrentText(prevText => prevText + text[currentIndex]);
			setCurrentIndex(prevIndex => prevIndex + 1);
			
			if(currentIndex === text.length - 1) {
				setCurrentIndex(0);
				setCurrentText('');
			}

			}, delay);

			return () => clearTimeout(timeout);
		}
	}, [currentIndex, delay, text]);

	return(
		<div className="hero min-h-screen bg-accent-light">
			<div className="hero-content flex-col lg:flex-row">
				<div>
					<h1 className="text-5xl font-bold">
						Welcome to <span className="text-primary">Bookworm</span>
					</h1>
					<p className="py-6 max-w-lg h-max">
						{currentText}
					</p>
					<Link href="/signup">
						<button className="btn btn-primary">
							Get started
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Hero;