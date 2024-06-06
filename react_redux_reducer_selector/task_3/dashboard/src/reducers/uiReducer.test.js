// reducers/uiReducer.test.js

import { Map } from 'immutable';
import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: Map(),
  });

  it('should return the initial state when no action is passed', () => {
    const newState = uiReducer(undefined, {});
    expect(newState.toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const newState = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(newState.toJS()).toEqual(initialState.toJS());
  });

  it('should change isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const newState = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(newState.get('isNotificationDrawerVisible')).toEqual(true);
  });

  it('should change isNotificationDrawerVisible property when HIDE_NOTIFICATION_DRAWER is passed', () => {
    const newState = uiReducer(undefined, { type: HIDE_NOTIFICATION_DRAWER });
    expect(newState.get('isNotificationDrawerVisible')).toEqual(false);
  });

  it('should change isUserLoggedIn property when LOGIN_SUCCESS is passed', () => {
    const newState = uiReducer(undefined, { type: LOGIN_SUCCESS });
    expect(newState.get('isUserLoggedIn')).toEqual(true);
  });

  it('should change isUserLoggedIn property when LOGIN_FAILURE is passed', () => {
    const newState = uiReducer(undefined, { type: LOGIN_FAILURE });
    expect(newState.get('isUserLoggedIn')).toEqual(false);
  });

  it('should change isUserLoggedIn property when LOGOUT is passed', () => {
    const newState = uiReducer(undefined, { type: LOGOUT });
    expect(newState.get('isUserLoggedIn')).toEqual(false);
  });
});