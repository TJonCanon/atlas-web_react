import Immutable from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

const mockState = Immutable.Map({
  notifications: Immutable.Map({
    filter: 'URGENT',
    entities: Immutable.Map({
      notifications: Immutable.Map({
        1: Immutable.Map({
          id: 1,
          isRead: false,
          type: 'urgent',
          value: 'New data available'
        }),
        2: Immutable.Map({
          id: 2,
          isRead: true,
          type: 'default',
          value: 'New course available'
        }),
        3: Immutable.Map({
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New resume available'
        })
      })
    })
  })
});

describe('Notification Selectors', () => {
  it('should return the correct filter value', () => {
    expect(filterTypeSelected(mockState)).toEqual('URGENT');
  });

  it('should return the list of notifications', () => {
    expect(getNotifications(mockState).toJS()).toEqual({
      1: {
        id: 1,
        isRead: false,
        type: 'urgent',
        value: 'New data available'
      },
      2: {
        id: 2,
        isRead: true,
        type: 'default',
        value: 'New course available'
      },
      3: {
        id: 3,
        isRead: false,
        type: 'urgent',
        value: 'New resume available'
      }
    });
  });

  it('should return the list of unread notifications', () => {
    expect(getUnreadNotifications(mockState).toJS()).toEqual({
      1: {
        id: 1,
        isRead: false,
        type: 'urgent',
        value: 'New data available'
      },
      3: {
        id: 3,
        isRead: false,
        type: 'urgent',
        value: 'New resume available'
      }
    });
  });
});