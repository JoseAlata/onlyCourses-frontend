import { CoursesResult, ICoursesDao } from './courses.dao.types';

export class CourseDao implements ICoursesDao {
  private static instance: CourseDao;

  private constructor() {
    if (CourseDao.instance) {
      throw new Error('Course Dao is a Singleton Pattern class. Use CourseDao.getInstance()');
    }
  }

  public static getInstance(): CourseDao {
    if (!CourseDao.instance) {
      CourseDao.instance = new CourseDao();
    }
    return CourseDao.instance;
  }

  public async getCourses(): Promise<CoursesResult> {
    const response = await fetch('https://apimocha.com/onlycourses/courses');
    const courses = (await response.json()) as CoursesResult;
    return courses;
  }
}
