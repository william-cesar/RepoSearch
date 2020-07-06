import React from 'react'

export default function LabelArea(props) {
	const labelText = props.labelText
	return (
		<>
			{labelText ? (
				<h3 className='Label'>{`${labelText}'s public repositories`}</h3>
			) : null}
		</>
	)
}
