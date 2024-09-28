'use client';
import OcButton from '@/app/shared/components/oc-button';
import OcInput from '@/app/shared/components/oc-input/oc-input';
import AuthBackground from '@/auth/components/auth-background';
import RegisterRole from '@/auth/components/register-role';
import { useTranslations } from 'next-intl';
import './register.scss';
import Image from 'next/image';

import { getFields, groupedFields } from './register.constants';
import Link from 'next/link';

export default function Register() {
  const t = useTranslations('Register');
  const registerImage = 'https://i.postimg.cc/6Qn1LTw8/register.png';
  const logoImage = 'https://i.postimg.cc/Y9r5BnTD/YachayL.png';

  const fields = groupedFields(getFields(t));
  const handleRoleChange = (role: 'teacher' | 'student' | null) => {
    console.log('Selected role:', role);
  };
  return (
    <section className="register">
      <AuthBackground src={registerImage} />
      <form className="register-main">
        <div className="register-form oc-padding-large">
          <div className="register-logo">
            <Image src={logoImage} alt="register-logo" width={64} height={64} />
          </div>
          <header className="register-header oc-gap-small">
            <span className="oc-typo-headline-large">{t('title')}</span>
            <span className="oc-typo-body-small oc-typo-text-less">{t('subtitle')}</span>
          </header>
          <RegisterRole onRoleChange={handleRoleChange} />
          <section className="register-fields oc-gap-large">
            {/* Renderizamos los campos agrupados */}
            {Object.keys(fields).map((group) => (
              <div key={group} className="row oc-gap-medium flex">
                {fields[group].map((field) => (
                  <label key={field.id} className="register-fields__field oc-gap-medium">
                    <span>{field.label}</span>
                    <OcInput
                      type={field.type}
                      placeholder={field.placeholder}
                      nameIcon={field.nameIcon}
                      right={field.right}
                    />
                  </label>
                ))}
              </div>
            ))}

            <div className="register-footer">
              <div className="register-footer__remember oc-gap-medium">
                <input type="checkbox" required />
                <span className="oc-typo-label-medium">
                  {t('terms.text')}{' '}
                  <a className="register-terms" target="_blank" rel="noopener noreferrer">
                    {t('terms.termsAndConditions')}
                  </a>{' '}
                  {t('terms.and')}{' '}
                  <a className="register-terms" target="_blank" rel="noopener noreferrer">
                    {t('terms.privacyPolicy')}
                  </a>
                  {t('terms.final')}.
                </span>
              </div>
            </div>
            <div className="register-actions">
              <OcButton>{t('buttons.register')}</OcButton>
              <Link href="/login">
                <span className="oc-typo-body-small">{t('buttons.hasAccount')}</span>
              </Link>
            </div>
          </section>
        </div>
      </form>
    </section>
  );
}
