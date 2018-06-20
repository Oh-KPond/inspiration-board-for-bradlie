import React from 'react';
import { mount, shallow } from 'enzyme';
import Board from './Board';

describe('Board', () => {
  test('that it matches an existing snapshot', () => {
    // Mount the component in the DOM
    // Given
    const wrapper = mount(<Board />);
    // When and Then
    expect(wrapper).toMatchSnapshot();
    // Remove component from the DOM
    wrapper.unmount();
  });
});
