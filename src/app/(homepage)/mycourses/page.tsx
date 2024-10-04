'use client';
import useCourses from '@/courses/hooks/use-courses';
import './mycourses.scss';
import Image from 'next/image';

export default function MyCourses() {
  const { courses, loading } = useCourses();
  console.debug('Rendering MyCourses:', { courses, loading });
  if (loading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <div>
      <h1 className="oc-typo-headline-medium">Cursos disponibles</h1>
      <ul>
        {courses.map((course) => (
          <article key={course.name}>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <span>{course.hasDiscount}</span>
            <Image
              src={course.banner}
              alt={course.name}
              width={1200}
              height={500}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </article>
        ))}
      </ul>
    </div>
  );
}
