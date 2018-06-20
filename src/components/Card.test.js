import React from 'react';
import { mount, shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  test('that it matches an existing snapshot', () => {
    // Mount the component in the DOM
    // Given
    const wrapper = shallow(<Card />);
    // When and Then
    expect(wrapper).toMatchSnapshot();
    // Remove component from the DOM
    wrapper.unmount();
  });
});
