import React, { useState } from 'react'
import './styles.css'

import LogoButton from '../../components/LogoButton/LogoButton'
import SearchButton from '../../components/SearchButton/SearchButton'

export default function Home() {
	const [renderInput, setRenderInput] = useState(false)
	const renderInputField = (createInputField) => {
		setRenderInput(createInputField)
	}
	console.log(renderInput)
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
