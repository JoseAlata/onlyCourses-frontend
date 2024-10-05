'use client';
import useCourses from '@/courses/hooks/use-courses';
import './mycourses.scss';

import CourseCard from '@/app/shared/components/oc-courses-card';

export default function MyCourses() {
  const { courses, loading } = useCourses();
  console.debug('Rendering MyCourses:', { courses, loading });
  if (loading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <div className="">
      <h1 className="oc-typo-headline-medium">Cursos disponibles</h1>
      <ul className="flex flex-wrap justify-center gap-3">
        {courses.map((course) => (
          <CourseCard key={course.name} course={course} />
        ))}
      </ul>
    </div>
  );
}
