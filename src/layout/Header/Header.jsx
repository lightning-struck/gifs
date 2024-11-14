import React, { Component } from 'react'
import s from './header.module.scss'

class Header extends Component {
	render() {
		return (
			<header className={s.header}>
				<a className={s.header_link} href='/'>
					GIFS
				</a>
			</header>
		)
	}
}

export default Header
