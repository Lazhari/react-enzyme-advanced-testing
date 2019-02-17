import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Route } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

class App extends Component {
	render() {
		return (
			<>
				<Route path="/post" component={CommentBox} />
				<Route path="/" component={CommentList} />
			</>
		);
	}
}

const styles = theme => ({
	root: {}
});

export default withStyles(styles)(App);
