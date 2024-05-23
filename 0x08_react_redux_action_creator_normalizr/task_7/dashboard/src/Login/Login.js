import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  handleChangeEmail(event) {
    const { value } = event.target;
    this.setState({
      email: value,
    }, this.checkEnableSubmit);
  }

  handleChangePassword(event) {
    const { value } = event.target;
    this.setState({
      password: value,
    }, this.checkEnableSubmit);
  }

  checkEnableSubmit() {
    const { email, password } = this.state;
    const enableSubmit = email !== '' && password !== '';
    this.setState({ enableSubmit });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className={css(styles.loginContainer)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email" className={css(styles.loginLabel)}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className={css(styles.loginInput)}
            value={email}
            onChange={this.handleChangeEmail}
          />
          <label htmlFor="password" className={css(styles.loginLabel)}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className={css(styles.loginInput)}
            value={password}
            onChange={this.handleChangePassword}
          />
          <input type="submit" value="OK" className={css(styles.loginButton)} disabled={!enableSubmit} />
        </form>
      </div>
    );
  }
}

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


export default Login;