/**
 * Handler errors
 */

import { NextApiResponse } from 'next';

const ErrorPage = ({ statusCode } : {statusCode: number }) => {
	return (
	<p>
		{statusCode
			? `An error ${statusCode} occurred on server`
			: 'An error occurred on client'}
	</p>
	)
};

ErrorPage.getInitialProps = ({ res, err } : {res: NextApiResponse, err: NextApiResponse }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
};

export default ErrorPage