import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE,
  } from './courseActionTypes';
  
  const defaultState = [];
  
  const courseReducer = (state = defaultState, action) => {
    switch (action.type) {
      case FETCH_COURSE_SUCCESS:
        return action.data.map(course => ({
          ...course,
          isSelected: false,
        }));
      case SELECT_COURSE:
        return state.map(course => {
          if (course.id === action.index) {
            return {
              ...course,
              isSelected: true,
            };
          } else {
            return course;
          }
        });
      case UNSELECT_COURSE:
        return state.map(course => {
          if (course.id === action.index) {
            return {
              ...course,
              isSelected: false,
            };
          } else {
            return course;
          }
        });
      default:
        return state;
    }
  };
  
  export default courseReducer;