import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import CommentBox from './CommentBox';
import CommentList from './CommentList';

const App = () => {
	return (
		<div>
			<CommentBox />
			<CommentList />
		</div>
	);
};

const styles = theme => ({
	root: {}
});

export default withStyles(styles)(App);
