// ========== Container
// import all modules
import React, { Fragment } from 'react';
import styled from './style.module.scss';

function Container(props) {
	return (
		<Fragment>
			<div className={styled.container}>
				{ props.children }
			</div>
		</Fragment>
	);
}

export default Container;