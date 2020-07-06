import React from 'react'
import './Header.css'

import LogoButton from '../../components/LogoButton/LogoButton'

export default function Header() {
	return (
		<header className='Header'>
			<LogoButton />
			<h1>RepoSearch</h1>
		</header>
	)
}
