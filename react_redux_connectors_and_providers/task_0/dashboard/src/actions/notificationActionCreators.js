import {
    MARK_AS_READ,
    SET_NOTIFICATION_FILTER,
  } from './notificationActionTypes';
  
  export const markAsRead = (index) => {
    return {
      type: MARK_AS_READ,
      index,
    };
  };
  
  export const setNotificationFilter = (filter) => {
    return {
      type: SET_NOTIFICATION_FILTER,
      filter,
    };
  };