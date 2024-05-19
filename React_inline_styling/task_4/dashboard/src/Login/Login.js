import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  loginLabel: {
    marginBottom: '5px',
    '@media (max-width: 900px)': {
      marginBottom: '10px',
      
    },
  },
  loginInput: {
    marginBottom: '10px',
    padding: '5px',
    width: '200px',
    '@media (max-width: 900px)': {
      width: '100%',
    },
  },
  loginButton: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    '@media (max-width: 900px)': {
      marginTop: '20px',
      width: '100%',
    },
  },
});

function Login() {
  return (
    <div className={css(styles.loginContainer)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email" className={css(styles.loginLabel)}>Email:</label>
      <input type="email" id="email" name="email" className={css(styles.loginInput)} />
      <label htmlFor="password" className={css(styles.loginLabel)}>Password:</label>
      <input type="password" id="password" name="password" className={css(styles.loginInput)} />
      <button className={css(styles.loginButton)}>OK</button>
    </div>
  );
}

export default Login;