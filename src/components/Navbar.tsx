import { IconContext } from 'react-icons'
import { BiSolidUserCircle } from 'react-icons/bi'

import Searchbar from './Searchbar'

const Navbar = () => {
	const menuItems = [
		{
			name: '',
			link: '',
		},
	]

	return (
		<nav className="navbar flex justify-between bg-gradient-to-r from-salmon to-mauve text-ghostwhite font-semibold h-8">
			<div className="logo"></div>
			<Searchbar />
			<div>
				<ul className="flex">
					{menuItems.map((item, index) => (
						<li key={index}>
							<a href={item.link}>{item.name}</a>
						</li>
					))}
					<li>
						<a href="/login">
							<IconContext.Provider value={{ size: '2rem' }}>
								<BiSolidUserCircle />
							</IconContext.Provider>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
