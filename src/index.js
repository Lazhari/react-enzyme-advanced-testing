import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import Root from 'Root';
import App from 'components/App';

ReactDOM.render(
	<Root>
		<CssBaseline />
		<BrowserRouter>
			<Route path="/" component={App} />
		</BrowserRouter>
	</Root>,
	document.getElementById('root')
);
