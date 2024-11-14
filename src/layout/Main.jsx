import React, { Component } from 'react'
import Card from '../component/Card/Card'
import s from './main.module.scss'
import { CardSkeleton } from '../component/Card/ui/CardSkeleton'
import Search from '../component/Search/Search'

class Main extends Component {
	state = {
		meals: [],
		tag: '',
		search: '',
		loading: true,
	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData = () => {
		let startUrl =
			'https://api.giphy.com/v1/gifs/trending?api_key=4NA2hrvFavErA4HJOYN5gMOXsgRf5jDv&limit=30&offset=0'

		fetch(startUrl)
			.then(res => res.json())
			.then(data => {
				if (data && data.data) {
					this.setState(
						{
							meals: data.data,
						},
						this.fetchRecipes
					)
				} else {
					this.setState({ navButtons: [], loading: false })
				}
			})
			.catch(error => {
				console.error('Error fetching categories:', error)
				this.setState({ loading: false })
			})
	}

	fetchRecipes = async () => {
		let url = ''
		const { search } = this.state

		if (search === '') {
			url =
				'https://api.giphy.com/v1/gifs/trending?api_key=4NA2hrvFavErA4HJOYN5gMOXsgRf5jDv&limit=30&offset=0'
		} else {
			url = `https://api.giphy.com/v1/gifs/search?api_key=4NA2hrvFavErA4HJOYN5gMOXsgRf5jDv&q=${search}&limit=25&offset=0&rating=g&lang=ru&bundle=messaging_non_clips`
		}

		this.setState({ loading: true })

		try {
			const response = await fetch(url)
			const data = await response.json()

			if (data && data.data) {
				this.setState({ meals: data.data, loading: false })
			} else {
				this.setState({ meals: { meals: [] }, loading: false })
			}
		} catch (error) {
			console.error('Error fetching recipes:', error)
			this.setState({ loading: false })
		}
	}

	render() {
		const { meals, loading } = this.state

		const setSearchValue = value => {
			this.setState({ search: value }, this.fetchRecipes)
		}

		return (
			<main className='content'>
				<div className='container'>
					<Search setSearchValue={setSearchValue} />

					{loading ? (
						<div className={s.grid}>
							<CardSkeleton />
							<CardSkeleton />
							<CardSkeleton />
							<CardSkeleton />
							<CardSkeleton />
							<CardSkeleton />
						</div>
					) : (
						<div className={s.grid}>
							{meals.length > 0 ? (
								meals.map((card, index) => (
									<Card
										key={index}
										urlToImage={card.images.original.url}
										title={card.title}
									/>
								))
							) : (
								<div style={{ color: 'white' }}>Ничего не найдено</div>
							)}
						</div>
					)}
				</div>
			</main>
		)
	}
}

export { Main }
