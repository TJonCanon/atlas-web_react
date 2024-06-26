import Immutable from 'immutable';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Immutable.Map({
  notifications: Immutable.Map(),
  filter: 'DEFAULT',
  loading: false,
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.mergeDeep({
        notifications: notificationsNormalizer(action.payload),
        loading: false,
      });
    case MARK_AS_READ:
      return state.setIn(['notifications', 'entities', 'notifications', action.index, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case SET_LOADING_STATE:
      return state.set('loading', action.payload);
    default:
      return state;
  }
};

export default notificationReducer;