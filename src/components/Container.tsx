import { ReactNode } from 'react'

const Container = ({ content }: { content: ReactNode }) => {
	return <div className="container mx-auto py-16">{content}</div>
}

export default Container
