'use client'

import { ReactElement } from 'react'
import Layout from '../layouts/layout'
import type { NextPageWithLayout } from './_app'
import LoginForm from '../components/auth/LoginForm'
import { useRouter } from 'next/router'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'

/**
 * Login page
 *
 * @return {JSX.Element} The login form
 */
const Login = () => {
	const router = useRouter()
	const supabase = createClientComponentClient()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSignIn = async () => {
		await supabase.auth.signInWithPassword({
			email,
			password,
		})
		router.push('/profile')
	}

	return (
		<>
			<LoginForm
				handleSignIn={handleSignIn}
				setEmail={setEmail}
				email={email}
				setPassword={setPassword}
				password={password}
			/>
		</>
	)
}

const getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>
}

const Page: NextPageWithLayout = () => {
	return (
		<>
			<div>
				<Login />
			</div>
		</>
	)
}

Page.getLayout = getLayout

export default Page
