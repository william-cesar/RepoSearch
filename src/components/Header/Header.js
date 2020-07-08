import React from 'react'
import './Header.css'

import Logo from '../../components/Logo/Logo'

export default function Header({ returnHome }) {
	return (
		<header className='Header' onClick={() => returnHome(true)}>
			<Logo />
			<h1>RepoSearch</h1>
		</header>
	)
}
