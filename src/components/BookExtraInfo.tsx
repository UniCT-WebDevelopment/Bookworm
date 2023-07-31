import Book from '@/types/Book';
import {BiSolidCalendar, BiBarcode, BiBarChartAlt, BiWorld } from 'react-icons/bi';
/**
 * Render extra information about a book
 * 
 * @param {number} pageCount Number of pages
 * @param {string} language Language
 * @param {string} publishedDate Published date
 * @param {string} isbn13 ISBN-13
 * 
 * @return {JSX.Element} Book extra info component
 */
const BookExtraInfo = ({ pageCount, language, publishedDate, isbn13 } : {
	pageCount: Book['pageCount'],
	language: Book['language'],
	publishedDate: Book['publishedDate'],
	isbn13: Book['isbn13'],
}) => {
	return (
		<div className="grid grid-cols-2 sm:grid-cols-4 gap-8 bg-base-200 p-8 shadow-sm rounded-md">
			<div className="flex flex-col items-center gap-2">
				<div className="text-gray-500">ISBN-13</div>
				<BiBarcode className="text-2xl text-gray-500" />
				<div className="text-gray-500">
					{isbn13 || 'N/A'}
				</div>
			</div>
			<div className="flex flex-col items-center gap-2">
				<div className="text-gray-500">Published</div>
				<BiSolidCalendar className="text-2xl text-gray-500" />
				<div className="text-gray-500">
					{publishedDate || 'N/A'}
				</div>
			</div>
			<div className="flex flex-col items-center gap-2">
				<div className="text-gray-500">Pages</div>
				<BiBarChartAlt className="text-2xl text-gray-500" />
				<div className="text-gray-500">
					{pageCount || 'N/A'}
				</div>
			</div>
			<div className="flex flex-col items-center gap-2">
				<div className="text-gray-500">Language</div>
				<BiWorld className="text-2xl text-gray-500" />
				<div className="text-gray-500">
					{language || 'N/A'}
				</div>
			</div>
		</div>
	);
};

export default BookExtraInfo;