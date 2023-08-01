import { IconContext } from 'react-icons';
import { BiUser, BiLogOutCircle } from 'react-icons/bi';
import SwitchTheme from './SwitchTheme';
import Link from 'next/link';
import logo from '../../public/logowhite.svg';
import Searchbar from './Searchbar';
import Image from 'next/image';
import {createClientComponentClient} from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
/**
 * Return the Navbar component
 * 
 * @return {JSX.Element} Navbar component
 */
const Navbar = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const supabase = createClientComponentClient();

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

	const handleLogout = () => {
		setIsAuthenticated(false);
		supabase.auth.signOut();
	};

	return (
		<nav className="navbar bg-primary sticky top-0 z-50 flex justify-between font-semibold h-8">
			<div className="logo">
				<Link href="/">
					<Image src={logo} alt="logo" width={80}/>
				</Link>
			</div>
			<div>
				<ul className="flex gap-2">
					<li>
						<Searchbar />
					</li>
					<li>
						<button className="btn btn-circle bg-primary-focus hover:bg-accent border-none">
							<Link href="/login">
								<IconContext.Provider value={{ size: '2rem', className: 'text-base-100' }}>
									<BiUser />
								</IconContext.Provider>
							</Link>
						</button>
					</li>
					<li>
						<SwitchTheme />
					</li>
					<li>
						{isAuthenticated && (
							<>
								<button
									className="btn btn-circle bg-primary-focus hover:bg-accent border-none"
									onClick={handleLogout}
								>
									<IconContext.Provider value={{ size: '2rem', className: 'text-base-100' }}>
										<BiLogOutCircle />
									</IconContext.Provider>
								</button>
							</>
						)}
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;
