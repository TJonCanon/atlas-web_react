import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three NotificationItems', () => {
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the text "Here is the list of notifications"', () => {
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });

  it('renders the first NotificationItem element with the right html', () => {
    expect(wrapper.find(NotificationItem).first().html()).toContain('New course available');
  });
});