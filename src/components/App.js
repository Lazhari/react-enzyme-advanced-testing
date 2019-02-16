import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends Component {
	render() {
		return (
			<>
				<CommentBox />
				<CommentList />
			</>
		);
	}
}

const styles = theme => ({
	root: {}
});

export default withStyles(styles)(App);
