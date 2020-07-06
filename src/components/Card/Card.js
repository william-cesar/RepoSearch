import React from 'react'
import './Card.css'

export default function Card({ cardData }) {
	const cardInfo = cardData
	return (
		<div className='Card'>
			{cardInfo !== ''
				? cardInfo.map(
						({ id, name, language, created_at, owner: { html_url } }) => {
							let date = new Date(created_at).toLocaleDateString()
							let repoName = name.replace(/-/g, ' ').toUpperCase()
							return (
								<div className='card-unit' key={id}>
									<div className='top'>
										<h4 className='repo-name'>{repoName}</h4>
									</div>
									<div className='bottom'>
										<div className='info'>
											<div className='info-box'>
												<p className='language'>{language ? language : '-'}</p>
											</div>
											<div className='info-box'>
												<p className='repo-date'>{date}</p>
											</div>
											<div className='info-box'>
												<a className='link-url' href={html_url}>
													<img
														src={process.env.PUBLIC_URL + '/github.png'}
														alt='github cat'
													/>
												</a>
											</div>
										</div>
										<div className='labels'>
											<div className='info-box'>
												<p>Language</p>
											</div>
											<div className='info-box'>
												<p>Created at</p>
											</div>
											<div className='info-box'>
												<p>Check repo</p>
											</div>
										</div>
									</div>
								</div>
							)
						}
				  )
				: null}
		</div>
	)
}
