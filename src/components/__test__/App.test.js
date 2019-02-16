import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

describe('Testing App component', () => {
	let wrapper;
	beforeEach(() => {
		// Because we are using withStyles HoC component from material-ui
		wrapper = shallow(<App />).dive();
	});
	it('shows a comment box', () => {
		expect(wrapper.find(CommentBox).length).toEqual(1);
	});

	it('shows a comment list', () => {
		expect(wrapper.find(CommentList).length).toEqual(1);
	});
});
