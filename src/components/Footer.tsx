import { IconContext } from 'react-icons'
import { BiLogoGithub } from 'react-icons/bi'
import { BiLogoTelegram } from 'react-icons/bi'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className="footer footer-center p-10 text-base-content bg-primary">
			<div className="grid grid-flow-col gap-4">
				<Link className="link link-hover" href="/about">About</Link>
				<Link className="link link-hover" href="/contact">Contact</Link>
			</div>
			<div>
				<div className="grid grid-flow-col gap-4">
					<IconContext.Provider value={{ size: '2.5rem' }}>
						<Link href={"https://github.com/makapx/bookworm-nextjs"} target='_blank'>
							<BiLogoGithub />
						</Link>
						<a>
							<BiLogoTelegram />
						</a>
					</IconContext.Provider>
				</div>
			</div>
			<div>
				<p>© 2023 Bookworm, Inc. All rights reserved.</p>
			</div>
		</footer>
	)
}

export default Footer
