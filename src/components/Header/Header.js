import React from 'react'

import LogoButton from '../../components/LogoButton/LogoButton'
import SearchButton from '../../components/SearchButton/SearchButton'

export default function Header() {
	return (
		<header className='Header'>
			<LogoButton />
			<h1>RepoSearch</h1>
			<SearchButton />
		</header>
	)
}
