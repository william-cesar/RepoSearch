import React, { useState } from 'react'
import './App.css'

import Home from './screens/Home'
import Search from './screens/Search'

export default function App() {
	const [renderSearchPage, setRenderSearchPage] = useState(false)
	const renderSearch = (isTrue) => {
		setRenderSearchPage(isTrue)
	}

	//is rendering search page first -- don't forget to change before commit
	return (
		<div className='App'>
			{renderSearchPage ? (
				<Home shouldRenderSearchPage={renderSearch} />
			) : (
				<Search />
			)}
		</div>
	)
}
