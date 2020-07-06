import React from 'react'
import './styles.css'

import LogoButton from '../../components/LogoButton/LogoButton'
import SearchButton from '../../components/SearchButton/SearchButton'

export default function Home({ shouldRenderSearchPage }) {
	let renderInput = false

	const renderInputField = (createInputField) => {
		renderInput = createInputField
		const isTrue = () => {
			shouldRenderSearchPage(renderInput)
		}
		isTrue()
	}

	return (
		<div className='Home'>
			<div className='head'>
				<LogoButton />
			</div>
			<section>
				<h1 className='title'>RepoSearch</h1>
				<p className='subtitle'>Find public repositories on Github</p>
			</section>
			<footer>
				<SearchButton shouldRenderInput={renderInputField} />
			</footer>
		</div>
	)
}
