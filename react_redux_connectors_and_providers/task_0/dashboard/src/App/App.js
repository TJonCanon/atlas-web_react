import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { AppContext } from './AppContext';

const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
  },
  appBody: {
    fontSize: '18px',
    padding: '20px',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.logOut();
    }
  }

  logIn(email, password) {
    this.props.logIn(email, password);
  }

  logOut() {
    this.props.logOut();
  }

  render() {
    const { displayDrawer } = this.state;
    const { isUserLoggedIn, user } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      {
        id: 3,
        type: 'urgent',
        html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' },
      },
    ];

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <div className={css(styles.app)}>
          <Header />
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <div className={css(styles.appBody)}>
            {isUserLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet
                quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta
                dapibus.
              </p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isUserLoggedIn: state.ui.get('isUserLoggedIn'),
    user: state.ui.get('user'),
  };
};

export default connect(mapStateToProps)(App);