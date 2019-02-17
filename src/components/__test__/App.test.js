import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
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
				<Root initialState={{ auth: true }}>
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
	describe('Testing the header', () => {
		it('shows a AppBar', () => {
			expect(wrapper.find(AppBar).length).toEqual(1);
		});
		it('has Comment Box as title', () => {
			expect(wrapper.render().text()).toContain('Comment Box');
		});

		it('has a sign in button', () => {
			expect(
				wrapper
					.find(AppBar)
					.find('button')
					.render()
					.text()
			).toEqual('Sign In');
		});

		it('has a sign out label after clicking on the sign in button', () => {
			const signInButton = wrapper.find(AppBar).find('button');
			signInButton.simulate('click');
			expect(
				wrapper
					.find(AppBar)
					.find('button')
					.render()
					.text()
			).toEqual('Sign Out');
		});
	});
	afterEach(() => {
		wrapper.unmount();
	});
});
