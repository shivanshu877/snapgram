import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './globals.css'
import SignupForm from './_auth/forms/SignupForm'
import SigninForm from './_auth/forms/SigninForm'
import { Home } from './root/pages'
const App = () => {
	return (
		<main className='flex h-screen'>
			<Routes>
				<Route path='/sign-in' element={<SigninForm />} />
				<Route path='/sign-up' element={<SignupForm />} />
				<Route index element={<Home />} />
			</Routes>

		</main>
	)
}


export default App
