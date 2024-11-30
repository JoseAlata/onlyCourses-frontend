'use client';

import OcButton from '@/app/shared/components/oc-button';
import OcInput from '@/app/shared/components/oc-input/oc-input';
import useUser from '@/auth/hooks/use-user';
import { AuthService } from '@/auth/services/auth.service';
import { CourseService } from '@/courses/service';
import React, { useState } from 'react';

const CourseForm = () => {
  const [message, setMessage] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const courseService = new CourseService();
  const authService = new AuthService();
  const { user } = useUser();

  const handleAddCourse = async () => {
    const token = authService.getToken();
    if (!token) {
      setMessage('Error: Token no encontrado');
      setIsSuccess(false);
      return;
    }
    try {
      const result = await courseService.addCourse(courseData, token);
      if (result && result.courseId) {
        setMessage('Curso agregado exitosamente!');
        setIsSuccess(true);
        setTimeout(() => {
          setMessage('');
        }, 2000);
      } else {
        setMessage('Error al agregar curso');
        setIsSuccess(false);
        setTimeout(() => {
          setMessage('');
        }, 2000);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Ocurrió un error al procesar tu solicitud');
      setIsSuccess(false);
      setTimeout(() => {
        setMessage('');
      }, 2000);
    }
  };

  // Estado para los datos del curso
  const [courseData, setCourseData] = useState({
    courseId: crypto.randomUUID(), // ID único para el curso
    courseTitle: '',
    description: '',
    price: 0,
    discount: 0,
    category: '',
    bannerUrl: '',
    topicsCovered: '',
    learningOutcomes: '',
    courseOverview: '',
    targetAudience: '',
    userId: `${user?.id}`, // Aquí puedes agregar el ID del usuario si lo tienes
    sections: [
      {
        sectionId: crypto.randomUUID(), // ID único para la sección
        sectionName: '',
        videoTitle: '',
        sectionUrl: '',
        sectionDescription: '',
        documentKeys: '', // Mantén documentKeys como un string
      },
    ],
  });

  // Función para manejar el cambio en los campos del curso
  const handleCourseChange = (field: string, value: string) => {
    setCourseData({
      ...courseData,
      [field]: value,
    });
  };

  // Función para agregar una nueva sección con un ID único
  const handleAddSection = () => {
    setCourseData({
      ...courseData,
      sections: [
        ...courseData.sections,
        {
          sectionId: crypto.randomUUID(), // Genera un nuevo ID único para la sección
          sectionName: '',
          videoTitle: '',
          sectionUrl: '',
          sectionDescription: '',
          documentKeys: '',
        },
      ],
    });
  };

  // Función para manejar el cambio en los campos de cada sección
  const handleSectionChange = (index: number, field: string, value: string) => {
    const updatedSections = [...courseData.sections];
    updatedSections[index][field] = value;
    setCourseData({
      ...courseData,
      sections: updatedSections,
    });
  };

  // Función para enviar el formulario
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    handleAddCourse(); // Llamada al servicio de envío
  };

  return (
    <div className="oc-surface-container oc-gap-medium oc-padding-large oc-shape-medium oc-primary relative">
      <h1 className="oc-typo-headline-medium oc-primary">Crear Curso</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campos del formulario del curso */}
        <OcInput
          type="text"
          value={courseData.courseTitle}
          onChange={(e) => handleCourseChange('courseTitle', e.target.value)}
          placeholder="Titulo"
        />
        <OcInput
          type="text"
          value={courseData.description}
          onChange={(e) => handleCourseChange('description', e.target.value)}
          placeholder="Descripción"
        />
        <OcInput
          type="number"
          value={courseData.price}
          onChange={(e) => handleCourseChange('price', e.target.value)}
          placeholder="Precio"
        />
        <OcInput
          type="text"
          value={courseData.discount}
          onChange={(e) => handleCourseChange('discount', e.target.value)}
          placeholder="Descuento"
        />
        <OcInput
          type="text"
          value={courseData.category}
          onChange={(e) => handleCourseChange('category', e.target.value)}
          placeholder="Categoria"
        />
        <OcInput
          type="text"
          value={courseData.bannerUrl}
          onChange={(e) => handleCourseChange('bannerUrl', e.target.value)}
          placeholder="Link Banner"
        />
        <OcInput
          type="text"
          value={courseData.topicsCovered}
          onChange={(e) => handleCourseChange('topicsCovered', e.target.value)}
          placeholder="Temas cubiertos"
        />
        <OcInput
          type="text"
          value={courseData.learningOutcomes}
          onChange={(e) => handleCourseChange('learningOutcomes', e.target.value)}
          placeholder="Resultados del curso"
        />
        <OcInput
          type="text"
          value={courseData.courseOverview}
          onChange={(e) => handleCourseChange('courseOverview', e.target.value)}
          placeholder="Resumen del curso"
        />
        <OcInput
          type="text"
          value={courseData.targetAudience}
          onChange={(e) => handleCourseChange('targetAudience', e.target.value)}
          placeholder="Público objetivo"
        />

        {/* Secciones */}
        <div>
          <h2 className="oc-typo-title-medium oc-primary">Secciones</h2>
          <div className="space-y-4">
            {courseData.sections.map((section, index) => (
              <div
                key={section.sectionId} // Usa el ID único de la sección como key
                className="oc-surface-container-low oc-gap-medium oc-padding-large oc-shape-medium flex flex-col gap-3"
              >
                <OcInput
                  type="text"
                  value={section.sectionName}
                  onChange={(e) => handleSectionChange(index, 'sectionName', e.target.value)}
                  placeholder="Nombre de la sección"
                />

                <OcInput
                  type="text"
                  value={section.videoTitle}
                  onChange={(e) => handleSectionChange(index, 'videoTitle', e.target.value)}
                  placeholder="Titulo del video"
                />
                <OcInput
                  type="text"
                  value={section.sectionUrl}
                  onChange={(e) => handleSectionChange(index, 'sectionUrl', e.target.value)}
                  placeholder="URL de la Sección"
                />
                <OcInput
                  type="text"
                  value={section.sectionDescription}
                  onChange={(e) => handleSectionChange(index, 'sectionDescription', e.target.value)}
                  placeholder="Descripción de la Sección"
                />
                <OcInput
                  type="text"
                  value={section.documentKeys}
                  onChange={(e) => handleSectionChange(index, 'documentKeys', e.target.value)}
                  placeholder="Documentos Clave"
                />
              </div>
            ))}
            <button
              type="button"
              className="oc-shape-medium oc-padding-x-medium oc-padding-y-small oc-primary-hover oc-primary-disabled oc-typo-body-medium"
              onClick={handleAddSection}
            >
              Agregar Sección
            </button>
          </div>
        </div>

        {/* Botón de envío */}
        <OcButton>Agregar Curso</OcButton>
        {/* Mensaje de resultado */}
      </form>
      {message && (
        <div
          className={`absolute bottom-0 left-1/2 mt-4 -translate-x-1/2 transform rounded p-4 shadow-lg ${
            isSuccess ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default CourseForm;
