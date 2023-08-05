import Navbar from '../components/Navbar'
import Container from '@/components/Container'
import Footer from '../components/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='min-h-screen flex flex-col justify-between'>
			<Navbar />
			<Container content={children} />
			<Footer />
		</div>
	)
}

export default Layout
