import Navbar from '../components/Navbar'
import Container from '@/components/Container'
import Footer from '../components/Footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Navbar />
			<Container content={children} />
			<Footer />
		</>
	)
}

export default Layout
