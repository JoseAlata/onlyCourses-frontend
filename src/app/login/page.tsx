"use client";
import './login.scss';
import Image from "next/image";
import OcTheme from "@/app/shared/components/oc-theme";
import OcLanguage from '../shared/components/oc-language';

export default function Login() {
  const loginImage = 'https://i.postimg.cc/rwvyck9n/login.png';
  const logoImage = 'https://i.postimg.cc/Y9r5BnTD/YachayL.png';
  return (
    <section className="login">
      <aside className='login-theme oc-padding-small oc-gap-small'>
        <OcTheme/>
        <OcLanguage/>
      </aside>
      <section className="login-main">
        <div className="login-form oc-padding-medium">
          <div className="login-logo">
            <Image src={logoImage} alt="login-logo" width={64} height={64}/>
          </div>
        </div>
      </section>
      <div className="login-background oc-surface-container-high">
        <Image src={loginImage} alt="login-background" layout="responsive" width={100} height={100}/>
      </div>
    </section>
  );
}