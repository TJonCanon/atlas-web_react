import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from '../assets/holberton-logo.jpg';
import { AppContext } from '../App/AppContext';

class Header extends React.Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <div className={css(styles.appHeader)}>
        <img className={css(styles.appHeaderImg)} src={holbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
        {user.isLoggedIn && (
          <section id="logoutSection">
            Welcome {user.email} (<span onClick={logOut}>logout</span>)
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



export default Header;