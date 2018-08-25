import React from 'react'
import PropTypes from 'prop-types';

import CardAvatar from './CardAvatar'
import CardAuthor from './CardAuthor'
import CardDate from './CardDate'

function Card (props) {
	const { message } = props

	return (
		<div className="card">
			<div className="card__header">
				<CardAvatar
					avatarUrl={message.avatarUrl}
				/>
				<div className="card__header__group">
					<CardAuthor
						authorName={message.authorName}
					/>
					<CardDate
						updated={message.updated}
					/>
				</div>
			</div>
			<div className="card__message">
				{message.content}
			</div>
		</div>
	)
}

Card.propTypes = {
	message: PropTypes.object.isRequired
}

export default Card