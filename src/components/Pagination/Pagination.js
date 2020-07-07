import React from 'react'
import './Pagination.css'

export default function Pagination({
	reposPerPage,
	totalRepos,
	paginate,
	currentPage,
}) {
	const pageNumbers = []
	const totalButtons = 5
	const totalPages = Math.ceil(totalRepos / reposPerPage)

	let maxLeft = currentPage - Math.floor(totalButtons / 2)
	let maxRight = currentPage + Math.floor(totalButtons / 2)

	if (maxLeft < 1) {
		maxLeft = 1
		maxRight = totalButtons
	}

	if (maxRight > totalPages) {
		maxLeft = totalPages - (totalButtons - 1)
		maxRight = totalPages

		if (maxLeft < 1) {
			maxLeft = 1
		}
	}

	for (let page = maxLeft; page <= maxRight; page++) {
		pageNumbers.push(page)
	}

	if (currentPage !== 1 && currentPage < totalPages) {
		return (
			<nav className='Pagination'>
				<button className='first-page' onClick={() => paginate(1)}>
					&#171;
				</button>
				<ul className='pagination-list'>
					{pageNumbers.map((number) => (
						<li key={number} className='pages'>
							<button onClick={() => paginate(number)} className='page-number'>
								{number}
							</button>
						</li>
					))}
				</ul>
				<button className='last-page' onClick={() => paginate(totalPages)}>
					&#187;
				</button>
			</nav>
		)
	}

	if (currentPage === totalPages) {
		return (
			<nav className='Pagination'>
				<button className='first-page' onClick={() => paginate(1)}>
					&#171;
				</button>
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
	} else {
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
}
