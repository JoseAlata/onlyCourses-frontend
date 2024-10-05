import { useEffect, useState } from 'react';

import { CoursesResult } from '../data';
import { CourseService } from '../service';

const courseService = new CourseService();

export default function useCourses() {
  const [courses, setCourses] = useState<CoursesResult>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCourses = async () => {
    try {
      const dataCourses = await courseService.getAllCourses();
      setCourses(dataCourses);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return { courses, loading };
}
