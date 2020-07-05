import React from 'react'

export default function SearchButton({ shouldRenderInput }) {
	const createInputField = () => {
		shouldRenderInput(true)
	}

	return (
		<div className='SearchButton'>
			<img
				onClick={createInputField}
				src={process.env.PUBLIC_URL + '/magnifier.png'}
				alt='magnifier'
			/>
		</div>
	)
}
