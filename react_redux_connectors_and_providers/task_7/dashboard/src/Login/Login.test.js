import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(3);
    expect(wrapper.find('label').length).toBe(2);
  });

  it('submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('submit button is enabled after changing the value of the two inputs', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input[name="email"]').simulate('change', { target: { value: 'test@example.com' } });
    wrapper.find('input[name="password"]').simulate('change', { target: { value: 'password123' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });
});