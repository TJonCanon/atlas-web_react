import { createSelector } from 'reselect';

const getNotificationState = (state) => state.notifications;

export const filterTypeSelected = createSelector(
  getNotificationState,
  (notificationState) => notificationState.get('filter')
);

export const getNotifications = createSelector(
  getNotificationState,
  (notificationState) => notificationState.get('entities').get('notifications')
);

export const getUnreadNotifications = createSelector(
  getNotifications,
  (notifications) => notifications.filter((notification) => !notification.get('isRead'))
);