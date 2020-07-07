import React, { useState } from 'react'
import axios from 'axios'

import './InputArea.css'

export default function InputArea({ passRepos }) {
	const [inputValue, setInputValue] = useState('')
	const [loading, setLoading] = useState(false)

	const submit = () => {
		const url = `https://api.github.com/users/${inputValue}/repos`
		setLoading(true)
		axios
			.get(url)
			.then((res) => {
				let repoData = res.data

				let capFirstUsernameLetter =
					inputValue.charAt(0).toUpperCase() + inputValue.slice(1)

				passRepos(repoData, capFirstUsernameLetter)
				document.querySelector('input').value = ''

				setLoading(false)
			})
			.catch((err) => {
				alert(err)
				setLoading(false)
			})
	}

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			submit()
		}
	}

	return (
		<div className='InputArea' onKeyDown={handleKeyDown}>
			<input
				type='text'
				className='input-area'
				placeholder='github username'
				required
				onChange={(event) => setInputValue(event.target.value)}
			/>
			<button className='submit-button' onClick={submit} disabled={loading}>
				{loading && (
					<i className='fa fa-refresh fa-spin' style={{ marginRight: '5px' }} />
				)}
				{loading && 'Loading Repos'}
				{!loading && 'Search Repos'}
			</button>
		</div>
	)
}
