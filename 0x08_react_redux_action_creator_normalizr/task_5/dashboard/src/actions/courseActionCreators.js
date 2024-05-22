import { SELECT_COURSE } from './courseActionTypes';
import { UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

export function unselectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}

export const boundCourseActionCreators = bindActionCreators({
  selectCourse,
  unselectCourse,
});