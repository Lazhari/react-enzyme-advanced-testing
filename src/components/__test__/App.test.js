import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from 'components/App';
import Root from 'Root';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

describe('Testing the post route', () => {
	let wrapper;
	beforeEach(() => {
		// Because we are using withStyles HoC component from material-ui
		wrapper = mount(
			<MemoryRouter initialEntries={['/post']}>
				<Root>
					<App />
				</Root>
			</MemoryRouter>
		);
	});
	it('shows a comment box', () => {
		expect(wrapper.find(CommentBox).length).toEqual(1);
	});

	it('shows a comment list', () => {
		expect(wrapper.find(CommentList).length).toEqual(1);
	});
	afterEach(() => {
		wrapper.unmount();
	});
});

describe('Testing the / route', () => {
	let wrapper;
	beforeEach(() => {
		// Because we are using withStyles HoC component from material-ui
		wrapper = mount(
			<MemoryRouter initialEntries={['/']}>
				<Root>
					<App />
				</Root>
			</MemoryRouter>
		);
	});
	it('shows no comment box', () => {
		expect(wrapper.find(CommentBox).length).toEqual(0);
	});

	it('shows a comment list', () => {
		expect(wrapper.find(CommentList).length).toEqual(1);
	});
	afterEach(() => {
		wrapper.unmount();
	});
});
