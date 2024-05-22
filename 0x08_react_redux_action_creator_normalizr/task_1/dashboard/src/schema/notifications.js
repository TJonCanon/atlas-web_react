import React from 'react';
import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../../../notifications.json';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', { idAttribute: 'guid' });

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizedData = normalize(notificationsData, notification);

const getAllNotificationsByUser = (userId) =>
  notificationsData.filter((author) => author.id === userId);

export default getAllNotificationsByUser;