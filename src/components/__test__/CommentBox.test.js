import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

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

describe('Testing the comment form', () => {
	beforeEach(() => {
		const textarea = wrapper.find('textarea');
		textarea.simulate('change', {
			target: { value: 'New comment' }
		});
	});
	it('has a textarea, users can edit it', () => {
		expect(wrapper.find('textarea').prop('value')).toEqual('New comment');
	});

	it('has a textarea empty after, the user submit the form', () => {
		const form = wrapper.find('form');
		form.simulate('submit');
		expect(wrapper.find('textarea').prop('value')).toEqual('');
	});
});

afterEach(() => {
	wrapper.unmount();
});
