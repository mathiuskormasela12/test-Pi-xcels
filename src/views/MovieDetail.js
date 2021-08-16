// ========== Movie Detail
// import all modules
import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/container/Container';
import Card from '../components/card/Card';
import service from '../helpers/service';

// import styled
import styled from '../style/movie.module.scss';

function Movies() {
	const { id } = useParams();
	const [state, setState] = useState({
		movie: null,
		message: null
	});

	useEffect(() => {
		const getMovies = async () => {
			try {
				const results = await service('http://localhost:3001/api/movies/' + id)
				console.log(results)
				setState(currentState => ({
					...currentState,
					message: results.message,
					movie: results.results
				}))
			} catch (err) {
				setState(currentState => ({
					...currentState,
					message: err.message,
					movie: null
				}))
			}
		}

		getMovies()
	}, [id])

	return (
		<Fragment>
			<div className={styled.hero}>
				<Container>
					<header className={styled.header}>
						<h1>Movies Detail</h1>
					</header>
					<main className={styled.main}>
						{
							state.movie ? (
								<div className={styled.row}>
									<div className={styled.col}>
										<Card details={{
											title: state.movie.title,
											original_title: state.movie.original_title,
											date: state.movie.release_date,
											description: state.movie.overview,
											tagline: state.movie.tagline,
											runtime: state.movie.runtime,
											vote_count: state.movie.vote_count,
											vote_average: state.movie.vote_average,
											status: state.movie.status
										}} />
									</div>
								</div>
							) : <p>No Data</p>
						}
					</main>
				</Container>
			</div>
		</Fragment>
	);
}

export default Movies;