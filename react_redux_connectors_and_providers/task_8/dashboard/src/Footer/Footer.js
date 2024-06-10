import React from 'react';
import { connect } from 'react-redux';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';

function Footer({ user }) {
  return (
    <div className="App-footer">
      <p>{getFooterCopy(true)} {getFullYear()}</p>
      {user && user.isLoggedIn && <p><a href="#">Contact us</a></p>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user'),
  };
};

export default connect(mapStateToProps)(Footer);