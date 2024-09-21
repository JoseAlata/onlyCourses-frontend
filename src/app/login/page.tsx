'use client';
import './login.scss';
import OcTheme from '@/app/shared/components/oc-theme';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import OcButton from '../shared/components/oc-button';
import OcInput from '../shared/components/oc-input/oc-input';
import OcLanguage from '../shared/components/oc-language';

export default function Login() {
  const t = useTranslations('Login');
  const loginImage = 'https://i.postimg.cc/rwvyck9n/login.png';
  const logoImage = 'https://i.postimg.cc/Y9r5BnTD/YachayL.png';
  return (
    <section className="login">
      <aside className="login-theme oc-padding-small oc-gap-small">
        <OcTheme />
        <OcLanguage />
      </aside>
      <form className="login-main">
        <div className="login-form oc-padding-large oc-gap-xxlarge">
          <div className="login-logo">
            <Image src={logoImage} alt="login-logo" width={64} height={64} />
          </div>
          <header className="login-header oc-gap-small">
            <span className="oc-typo-headline-large">{t('title')}</span>
            <span className="oc-typo-body-small oc-typo-text-less">{t('subtitle')}</span>
          </header>
          <section className="login-fields oc-gap-large">
            <label className="login-fields__field oc-gap-medium">
              <span>{t('fields.email')}</span>
              <OcInput placeholder="ysaacnoe.correa@unmsm.edu.pe" />
            </label>
            <label className="login-fields__field oc-gap-medium">
              <span>{t('fields.password')}</span>
              <OcInput placeholder="**********" nameIcon="visibility" right />
            </label>
            <div className="login-footer">
              <div className="login-footer__remember oc-gap-medium">
                <input type="checkbox" />
                <span className="oc-typo-label-medium">{t('footer.rememberMe')}</span>
              </div>
              <span className="login-footer__forgot oc-typo-label-medium">{t('footer.forgotPassword')}</span>
            </div>
            <div className="login-actions">
              <OcButton bgColor="#0E77EA">{t('buttons.login')}</OcButton>
            </div>
          </section>
        </div>
      </form>
      <div className="login-background">
        <Image src={loginImage} alt="login-background" layout="responsive" width={100} height={100} />
      </div>
    </section>
  );
}
