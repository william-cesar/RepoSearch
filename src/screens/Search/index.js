import React, { useState } from 'react'
import './styles.css'

import Header from '../../components/Header/Header'
import InputArea from '../../components/InputArea/InputArea'
import Card from '../../components/Card/Card'
import LabelArea from '../../components/LabelArea/LabelArea'
import Pagination from '../../components/Pagination/Pagination'

export default function Search({ shouldRenderHomePage }) {
	const [repositories, setRepositories] = useState('')
	const [username, setUsername] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const [reposPerPage] = useState(3)

	const updateRepos = (repoData, capFirstUsernameLetter) => {
		//Receiving repos from 'Search' element
		setRepositories(repoData)
		setUsername(capFirstUsernameLetter)
	}

	//Get current repos
	const indexOfLastRepo = currentPage * reposPerPage
	const indexOfFirstRepo = indexOfLastRepo - reposPerPage
	const currentRepo = repositories.slice(indexOfFirstRepo, indexOfLastRepo)

	//Receiving page number from 'Paginate'
	const paginate = (pageNumber) => setCurrentPage(pageNumber)

	const returnHome = (stayOnSearchPage) => {
		shouldRenderHomePage(!stayOnSearchPage)
	}

	return (
		<div className='Search'>
			<Header returnHome={returnHome} />
			<InputArea passRepos={updateRepos} />
			<LabelArea labelText={username} />
			<Card cardData={currentRepo} />
			<Pagination
				reposPerPage={reposPerPage}
				totalRepos={repositories.length}
				paginate={paginate}
				currentPage={currentPage}
			/>
		</div>
	)
}
