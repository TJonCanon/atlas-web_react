import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from '../constants/courseActionTypes';

describe('courseActionCreators', () => {
  describe('selectCourse', () => {
    it('should return an action with type SELECT_COURSE and index 1', () => {
      const action = selectCourse(1);
      expect(action).toEqual({ type: SELECT_COURSE, index: 1 });
    });
  });

  describe('unSelectCourse', () => {
    it('should return an action with type UNSELECT_COURSE and index 1', () => {
      const action = unSelectCourse(1);
      expect(action).toEqual({ type: UNSELECT_COURSE, index: 1 });
    });
  });
});