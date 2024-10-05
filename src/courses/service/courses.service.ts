import { CourseDao, CoursesResult } from '../data';
import { ICourseService } from './course.service.types';

export class CourseService implements ICourseService {
  private dao: CourseDao;

  public constructor() {
    this.dao = CourseDao.getInstance();
  }

  public async getAllCourses(): Promise<CoursesResult> {
    const courses = await this.dao.getCourses();
    return courses;
  }

  public async getDiscountedCourses(): Promise<CoursesResult> {
    const courses = await this.dao.getCourses();
    const discountedCourses = courses.filter((course) => course.hasDiscount);
    return discountedCourses;
  }
}
