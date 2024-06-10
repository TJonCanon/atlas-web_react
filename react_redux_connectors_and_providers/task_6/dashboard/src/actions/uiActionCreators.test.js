import { toggleModal, LOGIN_SUCCESS, loginSuccess } from './uiActionCreators';

describe('toggleModal', () => {
  it('should create an action to toggle the modal', () => {
    const expectedAction = {
      type: 'TOGGLE_MODAL',
    };
    expect(toggleModal()).toEqual(expectedAction);
  });
});

describe('loginSuccess', () => {
  it('should create an action to indicate a successful login', () => {
    const user = {
      name: 'Jane',
      email: 'jane@example.com',
    };
    const expectedAction = {
      type: LOGIN_SUCCESS,
      payload: {
        user,
      },
    };
    expect(loginSuccess(user)).toEqual(expectedAction);
  });
});