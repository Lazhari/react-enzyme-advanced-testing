import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import Root from 'Root';
import App from 'components/App';

ReactDOM.render(
	<Root>
		<Router>
			<App path="/" />
		</Router>
	</Root>,
	document.getElementById('root')
);
