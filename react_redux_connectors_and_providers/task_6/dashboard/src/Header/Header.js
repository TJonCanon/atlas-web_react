import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from '../assets/holberton-logo.jpg';
import { logout } from '../actions/uiActionCreators';

class Header extends React.Component {
  render() {
    const { user, logout } = this.props;

    return (
      <div className={css(styles.appHeader)}>
        <img className={css(styles.appHeaderImg)} src={holbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
        {user && user.isLoggedIn && (
          <section id="logoutSection">
            Welcome {user.email} (<span onClick={logout}>logout</span>)
          </section>
        )}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: '24px',
    color: '#E11D3F',
  },
  appHeaderImg: {
    width: '200px',
    height: '200px',
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user'),
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);