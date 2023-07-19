import { IconContext } from 'react-icons'
import { BiSearchAlt, BiX } from 'react-icons/bi'
import { useRouter } from 'next/router'
import { useState } from 'react'

// TODO: Handle empty search. Maybe display a message or something or redirect to the home page.

/**
 * The Searchbar Component
 * Redirects to the search page with the query
 *
 * @returns {JSX.Element} The searchbar component
 */
const Searchbar = () => {
	const router = useRouter()
	const [searched, setSearched] = useState<string>('')
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const encodeQueryParam = (param: string) => {
		const specialChars = [
			'+',
			'.',
			'&',
			'|',
			'!',
			'(',
			')',
			'{',
			'}',
			'[',
			']',
			'^',
			'"',
			'~',
			'*',
			'?',
			':',
			'\\',
		]

		return param
			.split('')
			.map((char) => {
				if (specialChars.includes(char)) {
					return '-'
				}
				return char
			})
			.join('')
	}

	const search = () => {
		const query = searched.trim()
		if (query) {
			router.push(`/search?q=${encodeQueryParam(query)}`)
		}
	}

	return (
		<div className={`searchbar flex justify-between ${isOpen ? 'absolute top-0 left-0 py-2 px-4 w-full bg-primary' : ''}` }>
			{isOpen && ( <input
				className="w-full outline-none rounded-sm border-none bg-base-100 text-neutral-800 h-12 px-2"
				type="text"
				placeholder="Search books..."
				id="searchbar"
				onKeyDown={(event) => {
					if (event.key === 'Enter' && searched.length > 0) {
						search()
					}
				}}
				onChange={(event) => {
					setSearched(event.target.value)
				}}
			/> )}
			<IconContext.Provider value={{ size: '1.5rem', className: 'text-base-100' }}>
			<button
				className="flex place-items-center justify-center btn btn-circle ml-2 bg-primary-focus hover:bg-accent border-none"
				onClick={() => {isOpen ? search() : setIsOpen(true)}}
				disabled={searched.length === 0 && isOpen}
			>
				<BiSearchAlt />
			</button>

			{isOpen && (
				<button
					className="btn btn-circle bg-primary-focus ml-2 hover:bg-accent border-none"
					onClick={() => {
						setIsOpen(false)
						setSearched('')
					}}>
					<BiX />
				</button>
			)}
			</IconContext.Provider>
		</div>
	)
}

export default Searchbar
