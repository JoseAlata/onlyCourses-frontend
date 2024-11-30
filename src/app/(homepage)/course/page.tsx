'use client';
import Image from 'next/image';
import './course.scss';
import OcButton from '@/app/shared/components/oc-button';

export default function Course() {
  return (
    <div className="">
      <div className="oc-padding-medium mx-auto max-w-6xl">
        {/* Título y descripción */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Información principal */}
          <div className="flex flex-col gap-6">
            <h1 className="oc-typo-headline-large oc-padding-bottom-medium">
              Adobe Illustrator desde cero hasta intermedio
            </h1>
            <p className="oc-typo-body-medium oc-typo-text-less oc-padding-bottom-medium">
              Aprende todo sobre dibujo vectorial con Illustrator y sé un experto de dibujos simples a gráficos
              complejos y avanzados.
            </p>
            {/* Docente e idioma */}
            <p className="oc-typo-body-medium">
              <span className="oc-typo-title-medium">Docente:</span>{' '}
              <a href="#" className="oc-typo-text-less hover:underline">
                Saulushin
              </a>
            </p>
            <p className="oc-typo-body-medium oc-padding-bottom-medium">
              <span className="oc-typo-title-medium">Idioma:</span> Español
            </p>
            {/* Lo que aprenderás */}
            <h2 className="oc-typo-title-large oc-padding-bottom-small">Lo que aprenderás</h2>
            <ul className="oc-typo-body-medium oc-padding-bottom-medium list-disc pl-5">
              <li>Usar las diferentes herramientas de Illustrator</li>
              <li>Crear y formatear texto</li>
              <li>Crear gráficos para impresión comercial</li>
              <li>Utilizar gráficos vectoriales en diseños avanzados</li>
            </ul>
          </div>
          {/* Información secundaria */}
          <div className="oc-surface-container-high oc-padding-medium oc-shape-medium flex flex-col gap-4">
            {/* Imagen del curso */}
            <Image
              src="/ai-course-thumbnail.png" // Reemplaza con la ruta de tu imagen
              alt="Adobe Illustrator"
              width={400}
              height={200}
              className="oc-shape-medium"
            />
            <div className="mt-6 text-center">
              <p className="oc-typo-title-large">69,90 S/</p>
              <p className="oc-typo-body-medium oc-typo-text-disabled line-through">200,00 S/</p>
              <OcButton>Inscribirse</OcButton>
            </div>
            <p className="oc-typo-body-medium oc-padding-top-medium">
              Este curso incluye: 1 artículo, 3 horas de contenido y certificado de finalización.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
