import { CoursesResult } from '../data';

export interface ICourseService {
  getAllCourses(): Promise<CoursesResult>;
  getDiscountedCourses(): Promise<CoursesResult>;
}
