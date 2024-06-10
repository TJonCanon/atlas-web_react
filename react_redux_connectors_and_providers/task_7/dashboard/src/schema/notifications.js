import React from 'react';
import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../../../notifications.json';

const notificationSchema = new schema.Entity('notifications');

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizedData = normalize(notificationsData.default, [notification]);

const getAllNotificationsByUser = (userId) => {
  const { notificationsData, messages } = normalizedData.entities;
  return Object.values(notificationsData)
    .filter((notification) => notification.author === userId)
    .map((notification) => messages[notification.context]);
};

export const notificationsNormalizer = (data) => {
  return normalize(data, [notificationSchema]);
};

export default getAllNotificationsByUser;