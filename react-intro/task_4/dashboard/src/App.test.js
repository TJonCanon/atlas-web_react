import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a div with the class App-header', () => {
    expect(wrapper.find('.App-header').length).toBe(1);
  });

  it('renders a div with the class App-body', () => {
    expect(wrapper.find('.App-body').length).toBe(1);
  });

  it('renders a div with the class App-footer', () => {
    expect(wrapper.find('.App-footer').length).toBe(1);
  });
});