import React from 'react';
import { mount, shallow } from 'enzyme';
import NewCardForm from './NewCardForm';

describe('NewCardForm', () => {
  test('that it matches an existing snapshot', () => {
    // Mount the component in the DOM
    // Given
    const wrapper = shallow(<NewCardForm
      addCardCallback={() => {}}
       />);
    // When and Then
    expect(wrapper).toMatchSnapshot();
    // Remove component from the DOM
    wrapper.unmount();
  });


  test('When the user enters text it appears in the input field', () => {
    const wrapper = shallow( <NewCardForm addCardCallback={() => {}} />);

    const fieldValues = [
      {
        field: 'text',
        value: 'Sunshine is good for the soul.',
      },
      {
        field:  'emoji',
        value: 'heart',
      }
    ];

    fieldValues.forEach(({field, value}) => {
      let nameField = wrapper.find(`[name="${field}"]`)
      nameField.simulate('change', {target: {
        name: field,
        value,
      }});
      wrapper.update();
      nameField = wrapper.find(`[name="${field}"]`);
      expect(nameField.getElement().props.value).toEqual(value);
    });

    // Remove component from the DOM
    wrapper.unmount();
  });

  test('NewCardForm can submit', () => {

    const mockAddCardCallback = jest.fn();

    const wrapper = mount(<NewCardForm addCardCallback={ mockAddCardCallback } />);

    wrapper.find('[name="text"]').simulate('change', {
      target: {
        name: 'text',
        value: 'Sunshine is good for the soul.',
      },
    });

    wrapper.update();

    wrapper.find('[name="emoji"]').simulate('change', {
      target: {
        name: 'emoji',
        value: 'heart',
      },
    });

    wrapper.update();

    wrapper.find('form').simulate('submit', { preventDefault: () => {}, });
    wrapper.update();

    const nameField = wrapper.find('[name="text"]');
    expect(nameField.getElement().props.value).toEqual('');

    expect(mockAddCardCallback).toHaveBeenCalled();
    expect(mockAddCardCallback.mock.calls[0][0]).toEqual({
      text: 'Sunshine is good for the soul.',
      emoji: 'heart',
    });
  })
});
