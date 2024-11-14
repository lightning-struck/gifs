import React, { Component } from 'react'
import s from './search.module.scss'
import { debounce } from 'lodash'
class Search extends Component {
	constructor(props) {
		super(props)

		this.debouncedSetSearchValue = debounce(this.props.setSearchValue, 500)
	}
	handleChange = event => {
		this.debouncedSetSearchValue(event.target.value)
	}
	render() {
		return (
			<div className={s.search_wrapper}>
				<input
					onChange={this.handleChange}
					type='text'
					className={s.search}
					placeholder='Search something'
				/>
			</div>
		)
	}
}

export default Search
