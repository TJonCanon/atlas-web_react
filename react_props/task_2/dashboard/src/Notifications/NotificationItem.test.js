import React from 'react';
import NotificationItem from '../Notifications/NotificationItem.js';
import App from '../App/App.js';
import { mount } from 'enzyme';

describe('NotificationItem component', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <NotificationItem type='default' html={{ __html: '<p>HTML</p>' }} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('correctly renders with dummy types', () => {
    const wrapper = mount(<NotificationItem type='default' value='test' />);
    expect(wrapper.prop('type')).toEqual('default');
    expect(wrapper.prop('value')).toEqual('test');
    expect(wrapper.text()).toEqual('test');
  });

  it('renders correctly with dummy html prop', () => {
    const wrapper = mount(
      <NotificationItem type='default' html={{ __html: '<u>test</u>' }} />
    );
    expect(wrapper.html()).toContain('<u>test</u>');
  });

  it('first NotificationItem has value "New course available"', () => {
    const wrapper = mount(<App />);
    const notificationItem = wrapper.find(NotificationItem).at(0);
    expect(notificationItem.prop('value')).toBe('New course available');
  });
});