import { fromJS } from 'immutable';
import { courseSelector } from './courseSelector';

describe('courseSelector', () => {
  it('should return an array of courses from the state', () => {
    const state = {
      courses: fromJS({
        entities: {
          1: { id: 1, name: 'Course 1' },
          2: { id: 2, name: 'Course 2' },
          3: { id: 3, name: 'Course 3' },
        },
      }),
    };

    const expected = [
      { id: 1, name: 'Course 1' },
      { id: 2, name: 'Course 2' },
      { id: 3, name: 'Course 3' },
    ];

    expect(courseSelector(state)).toEqual(expected);
  });

  it('should return an empty array if there are no courses in the state', () => {
    const state = {
      courses: fromJS({
        entities: {},
      }),
    };

    expect(courseSelector(state)).toEqual([]);
  });
});