import React, { useState } from 'react'
import './styles.css'

import Header from '../../components/Header/Header'
import InputArea from '../../components/InputArea/InputArea'
import Card from '../../components/Card/Card'
import LabelArea from '../../components/LabelArea/LabelArea'
import Pagination from '../../components/Pagination/Pagination'

export default function Search() {
	const [repositories, setRepositories] = useState('')
	const [username, setUsername] = useState('')
	const [currentPage, setCurrentPage] = useState(1)
	const [reposPerPage] = useState(5)

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

	return (
		<div className='Search'>
			<Header />
			<InputArea passRepos={updateRepos} />
			<LabelArea labelText={username} />
			<Card cardData={currentRepo} />
			<Pagination
				reposPerPage={reposPerPage}
				totalRepos={repositories.length}
				paginate={paginate}
			/>
		</div>
	)
}
