import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging', () => {
    beforeEach(() => {
      jest.spyOn(console, 'log').mockImplementation(() => {});
    });
  
    afterEach(() => {
      console.log.mockRestore();
    });
  
    it('calls console.log on mount and unmount with Component when wrapped element is pure html', () => {
      const WrappedComponent = WithLogging(() => <p>Hello</p>);
      const wrapper = mount(<WrappedComponent />);
      expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
      wrapper.unmount();
      expect(console.log).toHaveBeenCalledWith('Component Component is going to unmount');
    });
  
    it('calls console.log on mount and unmount with the wrapped component name when it is Login', () => {
        const WrappedComponent = WithLogging(Login);
        const wrapper = mount(<WrappedComponent />);
        expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
        wrapper.unmount();
        expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');
      });
    });

    afterEach(() => {
        console.log.mockRestore();
      });
