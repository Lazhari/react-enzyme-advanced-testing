import React, { Component } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
class CommentList extends Component {
	renderComments() {
		const { comments } = this.props;
		return comments.map((comment, index) => (
			<ListItem key={index}>
				<ListItemText>{comment}</ListItemText>
			</ListItem>
		));
	}
	render() {
		const { classes } = this.props;
		return <List className={classes.root}>{this.renderComments()}</List>;
	}
}

const styles = ({ spacing, palette }) => ({
	root: {
		marginTop: spacing.unit * 2,
		width: '100%',
		backgroundColor: palette.background.paper
	}
});

function mapStateToProps(state) {
	const { comments } = state;
	return { comments };
}

export default compose(
	connect(mapStateToProps),
	withStyles(styles)
)(CommentList);
