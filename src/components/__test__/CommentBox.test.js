import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

describe('Testing the CommentBox', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(<CommentBox />);
	});
	it('has a h1 title', () => {
		expect(wrapper.find('h1').length).toEqual(1);
	});
	it('has a textarea field', () => {
		expect(wrapper.find('textarea').length).toEqual(1);
	});

	it('has a button', () => {
		expect(wrapper.find('button').length).toEqual(1);
	});

	afterEach(() => {
		wrapper.unmount();
	});
});
