import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <div id="container" className={css(styles.container)}>
        <div
          className={`menuItem ${css(styles.menuItem)} ${css(styles.fadeBounce)}`}
          onClick={handleDisplayDrawer}
        >
          Your notifications
        </div>
        {displayDrawer && (
          <div className={`Notifications ${css(styles.notifications)}`}>
            <img
              src={closeIcon}
              alt="close icon"
              style={{
                height: '15px',
                position: 'absolute',
                top: 10,
                right: 10,
              }}
              aria-label="Close"
              onClick={handleHideDrawer}
            ></img>

            {listNotifications.length > 0 && <p>Here is the list of notifications</p>}
            <ul className={css(styles.list)}>
              {listNotifications.length === 0 ? (
                <p>No new notification for now</p>
              ) : (
                listNotifications.map(({ type, html, value, id }) => (
                  <NotificationItem
                    key={id}
                    type={type}
                    html={html}
                    value={value}
                    markAsRead={this.markAsRead}
                    className={`notification-item ${css(
                      type === 'default' ? styles.defaultNotification : styles.urgentNotification
                    )}`}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  fetchNotifications: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

const mapStateToProps = (state) => {
  return {
    listNotifications: state.notifications.get('notifications').valueSeq().toArray(),
  };
};

const mapDispatchToProps = {
  fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);

const styles = StyleSheet.create({
  notifications: {
    border: '1px dashed rgb(224,53,75)',
    padding: '1%',
    position: 'relative',
    '@media screen and (max-width: 900px)': {
      fontSize: 20,
      padding: 0,
      border: 'none',
    },
  },

  defaultNotification: {
    color: 'blue',
  },

  urgentNotification: {
    color: 'red',
  },

  container: {
    float: 'right',
    '@media screen and (max-width: 900px)': {
      float: 'unset',
    },
  },

  menuItem: {
    textAlign: 'end',
    '@media screen and (max-width: 900px)': {
      display: 'none',
    },
  },

  list: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },

  fadeBounce: {
    ':hover': {
      animationName: [
        {
          '0%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
        {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(5px)' },
        },
      ],
      animationDuration: ['1s', '0.5s'],
      animationIterationCount: ['infinite', '3'],
    },
  },
});