import React, { useState } from 'react'
import './App.css'

import Home from './screens/Home'
import Search from './screens/Search'

export default function App() {
	const [renderPage, setRenderPage] = useState(false)

	const renderSearch = (renderSearch) => {
		setRenderPage(renderSearch)
	}
	const renderHome = (renderHome) => {
		setRenderPage(renderHome)
	}

	return (
		<div className='App'>
			{renderPage ? (
				<Search shouldRenderHomePage={renderHome} />
			) : (
				<Home shouldRenderSearchPage={renderSearch} />
			)}
		</div>
	)
}
