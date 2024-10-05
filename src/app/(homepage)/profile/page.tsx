'use client';
import './profile.scss';
import OcButton from '@/app/shared/components/oc-button/oc-button';
import OcDropdown from '@/app/shared/components/oc-dropdown';
import OcInput from '@/app/shared/components/oc-input/oc-input';
import Image from 'next/image';
export default function Profile() {
  const profileImage = 'https://i.postimg.cc/zGjQTDpx/photo-Profile.png';
  const profileFill = '/undraw_personal_info_re_ur1n 1.png';
  return (
    <div className="profile">
      <h1>Mi Perfil</h1>
      <div className="profile-infoGeneral">
        <div className="profile-buttons">
          <div className="profile-imageContainer">
            <div>
              <Image
                src={profileImage}
                alt="sidebar-logo"
                width={175}
                height={175}
                style={{ maxWidth: '100%', height: 'auto' }}
                className="profile-image"
              />
            </div>
          </div>
          <div className="profile-containerButtons">
            <OcButton borderRadius="medium" bgColor="var(--oc-sys-color-surface-container-high)">
              editar
            </OcButton>
            <OcButton borderRadius="medium" bgColor="var(--oc-sys-color-surface-container-high)">
              Eliminar Foto
            </OcButton>
          </div>
        </div>
        <div className="profile-separator"></div>
        <div className="profile-infoNames">
          <div className="profile-containerNames">
            <label className="profile-Names">
              <span>Nombre:</span>
              <OcInput placeholder="Monoval" className="profile-input" />
              <div>
                <OcButton borderRadius="medium">editar</OcButton>
              </div>{' '}
            </label>
          </div>
          <div className="profile-containerNames">
            <label className="profile-Names">
              <span>Apellido:</span>
              <OcInput placeholder="Monoval" className="profile-input" />
              <div>
                <OcButton borderRadius="medium">editar</OcButton>
              </div>{' '}
            </label>
          </div>
          <div className="profile-containerNames">
            <label className="profile-Names">
              <span className="profile-gmail">Correo:</span>
              <OcInput placeholder="Monoval" className="profile-input" />
              <div>
                <OcButton borderRadius="medium">editar</OcButton>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="profile-note">
        <h2>Datos Adicionales</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, corporis, ipsum fugiat ut pariatur vero aliquid
          esse qui accusamus nulla ea magnam nostrum ex corrupti vitae, enim possimus dolorem quisquam.
        </p>
      </div>
      <div className="profile-infoEspecific">
        <div className="profile-inputEspecific">
          <div className="profile-label">Facultad:</div>
          <div className="profile-input">
            <OcDropdown placeholder="Selecciona una opción"></OcDropdown>
          </div>
          <div className="profile-button"></div>

          <div className="profile-label">Nombre:</div>
          <div className="profile-input">
            <OcInput placeholder="Selecciona una opción"></OcInput>
          </div>
          <div className="profile-button">
            <OcButton borderRadius="medium">editar</OcButton>
          </div>

          <div className="profile-label">Nombre:</div>
          <div className="profile-input">
            <OcInput placeholder="Selecciona una opción"></OcInput>
          </div>
          <div className="profile-button">
            <OcButton borderRadius="medium">editar</OcButton>
          </div>

          <div className="profile-label">Nombre:</div>
          <div className="profile-input">
            <OcInput placeholder="Selecciona una opción"></OcInput>
          </div>
          <div className="profile-button">
            <OcButton borderRadius="medium">editar</OcButton>
          </div>
        </div>
        <div className="profile-Image">
          <Image
            src={profileFill}
            alt="sidebar-logo"
            width={175}
            height={175}
            style={{ maxWidth: '100%', height: 'auto' }}
            className="profile-image"
          />
        </div>
      </div>

      <div className="profile-submit">
        <OcButton borderRadius="medium">editar</OcButton>
      </div>
    </div>
  );
}
