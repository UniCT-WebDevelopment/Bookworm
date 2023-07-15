import { IconContext } from 'react-icons'
import { BiSearchAlt } from 'react-icons/bi'
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
		<div className="searchbar md:basis-2/5">
			<input
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
			/>
			<button
				className="flex place-items-center justify-center btn btn-circle ml-4 bg-primary-focus hover:bg-accent border-none"
				onClick={search}
				disabled={searched.length === 0}
			>
				<IconContext.Provider value={{ size: '1.5rem' }}>
					<BiSearchAlt />
				</IconContext.Provider>
			</button>
		</div>
	)
}

export default Searchbar
