import React from 'react'

export default function Logo() {
	return (
		<div className='Logo'>
			<img
				className='logo-image'
				src={process.env.PUBLIC_URL + '/reposearch.png'}
				alt='Github cat with magnifier'
			/>
		</div>
	)
}
