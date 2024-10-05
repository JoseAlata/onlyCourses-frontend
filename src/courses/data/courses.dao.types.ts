import { CourseModel } from '../model';

export type CoursesResult = CourseModel[];

export interface ICoursesDao {
  getCourses(): Promise<CoursesResult>;
}
