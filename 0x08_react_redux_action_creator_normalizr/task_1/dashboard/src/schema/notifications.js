import React from 'react';
import * as notificationsData from '../../../../notifications.json';

const getAllNotificationsByUser = (userId) =>
  notificationsData.filter((author) => author.id === userId);

export default getAllNotificationsByUser;