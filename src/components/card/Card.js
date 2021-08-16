// ========== Card
// import all modules
import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import styled from './style.module.scss';

function Card(props) {
	const history = useHistory();

	const detail = id => {
		history.push('/' + id)
	}

	if(props.details) {
		return (
			<Fragment>
				<div className={styled.card}>
					<div className={styled.container}>
						<header>
							<h3>{ props.details.title }</h3>
							<p>Original Title : { props.details.original_title }</p>
							<p>Release Date : { props.details.date }</p>
							<p>Runtime : { props.details.runtime }</p>
							<p>Status : { props.details.status }</p>
							<p>Vote Average : { props.details.vote_average }</p>
							<p>Vote Count : { props.details.vote_count }</p>
							<p>Tagline : { props.details.tagline }</p>
						</header>
						<main>
							<p>
								{props.details.description}
							</p>
						</main>
					</div>
				</div>
			</Fragment>
		)
	} else {
		return (
			<Fragment>
				<div className={styled.card}>
					<div className={styled.container}>
						<header>
							<h3>{ props.title }</h3>
							<p>Release Date : { props.date }</p>
						</header>
						<main>
							<p>
								{props.description.substr(0, 100).concat('...')}
							</p>
							<button className={styled.btn} onClick={() => detail(props.id)}>
								Detail
							</button>
						</main>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Card;