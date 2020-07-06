import React from 'react'

export default function Card({ cardData }) {
	const cardInfo = cardData
	return (
		<div className='Card'>
			{cardInfo !== ''
				? cardInfo.map(
						({ id, name, language, created_at, owner: { html_url } }) => {
							let date = new Date(created_at).toLocaleDateString()
							return (
								<div className='card-unit' key={id}>
									<h4 className='repo-name'>{name.toUpperCase()}</h4>
									<a className='link-url' href={html_url}>
										Go to this repository
									</a>
									<p className='language'>{language}</p>
									<p className='repo-date'>{date}</p>
								</div>
							)
						}
				  )
				: null}
		</div>
	)
}
