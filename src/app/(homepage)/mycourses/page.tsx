'use client';
import './mycourses.scss';

import CourseCard from '@/app/shared/components/oc-courses-card';
import useUser from '@/auth/hooks/use-user';
import useCourses from '@/courses/hooks/use-courses';

export default function MyCourses() {
  const { user, loadingUser } = useUser();
  const { courses, loading } = useCourses();
  console.log(user);
  console.log(courses);
  console.debug('Rendering MyCourses:', { courses, loading });
  if (loading && loadingUser) {
    return <h1>Cargando...</h1>;
  }
  return (
    <div className="">
      {user && <h1 className="oc-typo-headline-medium">Bienvenido, {user.name}</h1>}
      <h1 className="oc-typo-headline-medium">Cursos disponibles</h1>

      <ul className="flex flex-wrap justify-center gap-3">
        {courses.map((course) => (
          <CourseCard key={course.courseTitle} course={course} />
        ))}
      </ul>
    </div>
  );
}
