import React, { useState } from 'react'
import './App.css'

import Home from './screens/Home'
import Search from './screens/Search'

export default function App() {
	const [renderSearchPage, setRenderSearchPage] = useState(false)
	const renderSearch = (isTrue) => {
		setRenderSearchPage(isTrue)
	}
	const renderHome = (isTrue) => {
		setRenderSearchPage(isTrue)
	}

	return (
		<div className='App'>
			{renderSearchPage ? (
				<Search shouldRenderHomePage={renderHome} />
			) : (
				<Home shouldRenderSearchPage={renderSearch} />
			)}
		</div>
	)
}
