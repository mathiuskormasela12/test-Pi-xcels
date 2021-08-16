// ========== Movies
// import all modules
import React, { Fragment, useEffect, useState } from 'react';
import Container from '../components/container/Container';
import Card from '../components/card/Card';
import service from '../helpers/service';

// import styled
import styled from '../style/movies.module.scss';

function Movies() {
	const [state, setState] = useState({
		movies: [],
		message: null,
		loading: true
	});

	useEffect(() => {
		getMovies()
	}, [])

	const getMovies = async () => {
		try {
			const results = await service('http://localhost:3001/api/movies')
			setState(currentState => ({
				...currentState,
				message: results.message,
				movies: results.results,
				loading: !currentState.loading
			}))
		} catch (err) {
			setState(currentState => ({
				...currentState,
				message: err.message,
				movies: [],
				loading: !currentState.loading
			}))
		}
	}

	return (
		<Fragment>
			<div className={styled.hero}>
				<Container>
					<header className={styled.header}>
						<h1>All Movies</h1>
					</header>
					<main className={styled.main}>
						<div className={styled.row}>
							{
								state.loading ? <p>Please wait ...</p> : (
									<Fragment>
										{
											state.movies.map((items, index) => (
												<div className={styled.col} key={String(index)}>
													<Card title={items.title} id={items.id} description={items.overview} date={items.release_date} />
												</div>
											))
										}
									</Fragment>
								)
							}
						</div>
					</main>
				</Container>
			</div>
		</Fragment>
	);
}

export default Movies;