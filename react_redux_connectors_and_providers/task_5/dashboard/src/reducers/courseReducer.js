import Immutable from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = Immutable.Map({
  entities: Immutable.Map(),
  selectedCourseId: null
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return state.merge(coursesNormalizer(action.data));
    case SELECT_COURSE:
      return state.setIn(['selectedCourseId'], action.courseId);
    case UNSELECT_COURSE:
      return state.setIn(['selectedCourseId'], null);
    default:
      return state;
  }
};

export default courseReducer;