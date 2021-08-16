// ========== Router
// import all modules
import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import all views
import Movies from './views/Movies';
import MovieDetail from './views/MovieDetail';

function Router() {
  return (
		<Fragment>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Movies} />
					<Route path="/:id" component={MovieDetail} />
				</Switch>
			</BrowserRouter>
		</Fragment>
	);
}

export default Router;