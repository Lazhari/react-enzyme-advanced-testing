import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
	class ComposedComponent extends Component {
		// Component just got rendered
		componentDidMount() {
			this.shouldNavigateAway();
		}
		// Our Component just get update
		componentDidUpdate() {
			this.shouldNavigateAway();
		}

		shouldNavigateAway() {
			if (!this.props.auth) {
				this.props.history.push('/');
			}
		}
		render() {
			return <ChildComponent {...this.props} />;
		}
	}

	function mapStateTopProps(state) {
		return { auth: state.auth };
	}

	return connect(mapStateTopProps)(ComposedComponent);
};
