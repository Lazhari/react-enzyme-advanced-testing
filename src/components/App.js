import React, { Component } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

class App extends Component {
	renderButton() {
		if (this.props.auth) {
			return (
				<Button color="inherit" onClick={() => this.props.changeAuth(false)}>
					Sign Out
				</Button>
			);
		}
		return (
			<Button color="inherit" onClick={() => this.props.changeAuth(true)}>
				Sign In
			</Button>
		);
	}
	renderHeader() {
		const { classes } = this.props;
		return (
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="title"
						color="inherit"
						className={classes.appTitle}
					>
						Comment Box
					</Typography>
					<div className={classes.menu}>
						<Link to="/" className={classes.link}>
							<Typography color="inherit" variant="button">
								Home
							</Typography>
						</Link>
						<Link to="/post" className={classes.link}>
							<Typography color="inherit" variant="button">
								New Post
							</Typography>
						</Link>
					</div>
					{this.renderButton()}
				</Toolbar>
			</AppBar>
		);
	}
	render() {
		return (
			<div>
				{this.renderHeader()}
				<Route path="/post" component={CommentBox} />
				<Route path="/" component={CommentList} />
			</div>
		);
	}
}

const styles = theme => ({
	root: {},
	appTitle: {
		marginRight: theme.spacing.unit * 2
	},
	menu: {
		display: 'flex',
		alignItems: 'center',
		flexGrow: 1
	},
	link: {
		color: 'white',
		textDecoration: 'none',
		marginRight: theme.spacing.unit,
		marginLeft: theme.spacing.unit
	}
});
function mapStateToProps(state) {
	return { auth: state.auth };
}
export default compose(
	connect(
		mapStateToProps,
		actions
	),
	withStyles(styles)
)(App);
