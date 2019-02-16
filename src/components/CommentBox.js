import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { createStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import * as actions from 'actions';

class CommentBox extends Component {
	state = { comment: '' };
	handleChange = event => {
		this.setState({
			comment: event.target.value
		});
	};
	handleSubmit = event => {
		event.preventDefault();
		// TODO: Call an action create
		// And Save the comment entered by the user
		this.props.saveComment(this.state.comment);
		this.setState({ comment: '' });
	};
	render() {
		const { classes } = this.props;

		return (
			<Card>
				<CardContent>
					<Typography variant="title" className={classes.title} component="h1">
						Add Comment
					</Typography>
					<form onSubmit={this.handleSubmit}>
						<TextField
							value={this.state.comment}
							onChange={this.handleChange}
							variant="outlined"
							multiline
							fullWidth
							rows={4}
							label="Your Comment"
						/>
						<Button
							type="submit"
							color="primary"
							variant="contained"
							className={classes.button}
							fullWidth
						>
							Submit Comment
						</Button>
					</form>
				</CardContent>
			</Card>
		);
	}
}

const styles = ({ spacing }) =>
	createStyles({
		root: {},
		title: {
			marginBottom: spacing.unit * 2
		},
		button: {
			marginTop: spacing.unit * 2
		}
	});

export default compose(
	connect(
		null,
		actions
	),
	withStyles(styles)
)(CommentBox);
