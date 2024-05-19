import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from '../assets/holberton-logo.jpg';

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

function Header() {
  return (
    <div className={css(styles.appHeader)}>
      <img className={css(styles.appHeaderImg)} src={holbertonLogo} alt="Holberton Logo" />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;