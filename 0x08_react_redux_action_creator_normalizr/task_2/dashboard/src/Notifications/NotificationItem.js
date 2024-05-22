import React from 'react';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
  listItem: {
    '@media screen and (max-width: 900px)': {
      borderBottom: '1px solid black',
      padding: '10px 8px',
      listStyleType: 'none',
    },
  },
});

const NotificationItem = React.memo(({ type, html, value, markAsRead, id }) => {
  const className = type === 'default' ? styles.default : styles.urgent;

  if (html) {
    return (
      <li
        className={`${css(styles.listItem)} ${css(className)}`}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={() => markAsRead(id)}
      />
    );
  }
  return (
    <li
      className={`${css(styles.listItem)} ${css(className)}`}
      data-notification-type={type}
      onClick={() => markAsRead(id)}
    >
      {value}
    </li>
  );
});

NotificationItem.propTypes = {
  ...NotificationItemShape.propTypes,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;