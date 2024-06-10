import { createSelector } from 'reselect';

const getCourses = (state) => state.courses;

export const courseSelector = createSelector(
  getCourses,
  (courses) => courses.get('entities').valueSeq().toArray()
);