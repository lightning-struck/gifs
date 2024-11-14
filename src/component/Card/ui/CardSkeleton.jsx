import React from 'react'
import s from '../card.module.scss'
export function CardSkeleton() {
	return (
		<div className={s.card}>
			<div className={s.card_image_skeleton}></div>
			<div className={s.card_bottom}>
				<span className={s.skeleton_line}></span>
				<span className={s.skeleton_line}></span>
			</div>
		</div>
	)
}
