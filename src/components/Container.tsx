import { ReactNode } from 'react'

const Container = ({ content }: { content: ReactNode }) => {
	return <div className="container m-auto p-8">{content}</div>
}

export default Container
