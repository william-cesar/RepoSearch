import React from 'react'

export default function LogoButton() {
	return (
		<div className='LogoButton'>
			<img
				className='logo'
				src={process.env.PUBLIC_URL + '/reposearch.png'}
				alt='Github cat with magnifier'
			/>
		</div>
	)
}
