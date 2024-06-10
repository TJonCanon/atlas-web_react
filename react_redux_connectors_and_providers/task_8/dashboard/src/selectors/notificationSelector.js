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

export const getUnreadNotificationsByType = createSelector(
  filterTypeSelected,
  getNotifications,
  (filterType, notifications) => {
    if (filterType === 'DEFAULT') {
      return notifications.filter((notification) => !notification.get('isRead'));
    }
    if (filterType === 'URGENT') {
      return notifications.filter(
        (notification) => !notification.get('isRead') && notification.get('type') === 'urgent'
      );
    }
    return notifications;
  }
);