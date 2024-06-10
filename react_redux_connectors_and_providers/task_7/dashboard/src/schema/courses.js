import { schema } from 'normalizr';

const courseSchema = new schema.Entity('courses');

export const coursesNormalizer = (data) => {
  return normalize(data, [courseSchema]);
};