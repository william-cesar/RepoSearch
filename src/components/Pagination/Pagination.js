import React from 'react'

export default function Pagination({ reposPerPage, totalRepos, paginate }) {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalRepos / reposPerPage); i++) {
		pageNumbers.push(i)
	}
	return (
		<nav className='Pagination'>
			<ul className='pagination-list'>
				{pageNumbers.map((number) => (
					<li key={number} className='pages'>
						<button onClick={() => paginate(number)} className='page-number'>
							{number}
						</button>
					</li>
				))}
			</ul>
		</nav>
	)
}
