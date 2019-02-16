import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
	moxios.install();
	moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
		status: 200,
		response: [
			{
				name: 'Fetch Comment #1'
			},
			{
				name: 'Fetch Comment #2'
			}
		]
	});
});

it('can fetch a list of comments and display them', done => {
	const wrapper = mount(
		<Root>
			<App />
		</Root>
	);

	const fetchCommentsButton = wrapper.find('button.fetch-comments');
	fetchCommentsButton.simulate('click');

	moxios.wait(() => {
		wrapper.update();
		expect(wrapper.find('li').length).toEqual(2);
		done();
		wrapper.unmount();
	});
});

afterEach(() => {
	moxios.uninstall();
});
