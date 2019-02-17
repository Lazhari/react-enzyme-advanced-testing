import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapper;

beforeEach(() => {
	const initialState = {
		comments: ['Comment 1', 'Comment 2']
	};
	wrapper = mount(
		<Root initialState={initialState}>
			<CommentList />
		</Root>
	);
});

it('creates on LI per comment', () => {
	expect(wrapper.find('li').length).toEqual(2);
});

it('shows the test for each comment', () => {
	expect(wrapper.render().text()).toContain('Comment 1');
	expect(wrapper.render().text()).toContain('Comment 2');
});

afterEach(() => {
	wrapper.unmount();
});
