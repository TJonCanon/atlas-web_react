import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader textFirstCell="Test" />);
    expect(wrapper.find('th')).toHaveLength(1);
    expect(wrapper.find('th').props()).toHaveProperty('colSpan', 2);
  });

  it('renders two cells when textSecondCell is present and isHeader is true', () => {
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell="Test" textSecondCell="Test2" />
    );
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Test" textSecondCell="Test2" />
    );
    expect(wrapper.find('tr > td')).toHaveLength(2);
  });

  it('applies the correct style for a regular row', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Test" />);
    expect(wrapper.find('tr').prop('style')).toEqual({
      backgroundColor: '#f5f5f5ab',
    });
  });

  it('applies the correct style for a header row', () => {
    const wrapper = shallow(<CourseListRow isHeader textFirstCell="Test" />);
    expect(wrapper.find('tr').prop('style')).toEqual({
      backgroundColor: '#deb5b545',
    });
  });
});