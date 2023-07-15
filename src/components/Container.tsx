import { ReactNode } from 'react'

const Container = ({ content }: { content: ReactNode }) => {
	return <div className="container m-auto py-8">{content}</div>
}

export default Container
