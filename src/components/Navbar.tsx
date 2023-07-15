import { IconContext } from 'react-icons'
import { BiUser } from 'react-icons/bi'
import SwitchTheme from './SwitchTheme'
import Link from 'next/link'
import logo from '../../public/logowhite.svg'
import Searchbar from './Searchbar'
import Image from 'next/image'

const Navbar = () => {
	const menuItems = [
		{
			name: '',
			link: '',
		},
	]

	return (
		<nav className="navbar bg-primary flex justify-between font-semibold h-8">
			<div className="logo">
				<Link href="/">
					<Image src={logo} alt="logo" width={80}/>
				</Link>
			</div>
			<Searchbar />
			<div>
				<ul className="flex gap-2">
					{menuItems.map((item, index) => (
						<li key={index}>
							<a href={item.link}>{item.name}</a>
						</li>
					))}
					<li>
						<button className="btn btn-circle bg-primary-focus hover:bg-accent border-none">
							<Link href="/profile">
								<IconContext.Provider value={{ size: '2rem', className: 'text-base-100' }}>
									<BiUser />
								</IconContext.Provider>
							</Link>
						</button>
					</li>
					<li>
						<SwitchTheme />
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
