import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
  return (
    <li data-priority={type} dangerouslySetInnerHTML={html}>
      {value}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
};

export default NotificationItem;