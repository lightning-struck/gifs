import React, { Component } from 'react'
import s from './card.module.scss'

class Card extends Component {
	render() {
		const { title, urlToImage } = this.props
		if (!urlToImage) {
			return null
		} else {
			return (
				<div className={s.card}>
					<div className={s.card_image}>
						<img className={s.card_image_item} src={urlToImage} alt='image' />
					</div>
					<div className={s.card_bottom}>
						<h4 className={s.title}>{title}</h4>
					</div>
				</div>
			)
		}
	}
}

export default Card
