import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

describe('Testing the CommentBox', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(<CommentBox />);
	});

	it('has a h1 title, form, textarea and a button ', () => {
		expect(wrapper.find('h1').length).toEqual(1);
		expect(wrapper.find('form').length).toEqual(1);
		expect(wrapper.find('textarea').length).toEqual(1);
		expect(wrapper.find('button').length).toEqual(1);
	});

	it('has a text area users can type in', () => {
		const textarea = wrapper.find('textarea');
		textarea.simulate('change', {
			target: { value: 'New comment' }
		});
		expect(wrapper.find('textarea').prop('value')).toEqual('New comment');
	});

	it('has a textarea empty after user submit the form', () => {
		const form = wrapper.find('form');
		const textarea = wrapper.find('textarea');
		textarea.simulate('change', {
			target: { value: 'New comment' }
		});
		form.simulate('submit');
		expect(wrapper.find('textarea').prop('value')).toEqual('');
	});

	afterEach(() => {
		wrapper.unmount();
	});
});
