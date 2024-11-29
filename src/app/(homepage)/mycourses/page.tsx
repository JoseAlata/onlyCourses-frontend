'use client';
import useCourses from '@/courses/hooks/use-courses';
import './mycourses.scss';

import CourseCard from '@/app/shared/components/oc-courses-card';
import useUser from '@/auth/hooks/use-user';

export default function MyCourses() {
  const { user, loadingUser } = useUser();
  const { courses, loading } = useCourses();
  console.log(user);
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
          <CourseCard key={course.name} course={course} />
        ))}
      </ul>
    </div>
  );
}
