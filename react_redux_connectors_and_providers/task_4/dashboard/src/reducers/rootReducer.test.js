import { Map } from 'immutable';
import rootReducer from './rootReducer';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      courses: Map({}),
      notifications: Map({}),
      ui: Map({}),
    };

    const state = rootReducer(undefined, {});

    expect(state).toEqual(expectedState);
  });
});