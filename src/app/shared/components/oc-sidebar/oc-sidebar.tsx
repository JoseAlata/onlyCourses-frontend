'use-client';
import { useTranslations } from 'next-intl';
import OcTheme from '../oc-theme';
import MenuItem from './oc-menu-item/oc-menu-item';
import './oc-sidebar.scss';
import Image from 'next/image';
import OcLanguage from '../oc-language';
import { menuItemData } from './menuItemdata';

interface OcSideBarProps {}

export default function OcSideBar({}: Readonly<OcSideBarProps>) {
  const t = useTranslations('HomePage');
  const logoImage = 'https://i.postimg.cc/28hLspF6/yachay-logo-completo.png';
  return (
    <aside className="sidebar oc-padding-medium oc-gap-xlarge min-h-screen max-w-60 flex-col">
      <Image
        src={logoImage}
        alt="sidebar-logo"
        width={1200}
        height={500}
        style={{ maxWidth: '100%', height: 'auto' }}
      />

      <section className="">
        <h3 className="oc-typo-text-less oc-typo-headline-small">Menu</h3>
        <div className="oc-gap-medium oc-typo-text-less flex flex-col">
          {menuItemData.map((item) => (
            <MenuItem nameIcon={item.nameIcon} nameItem={t(`sidebar.menu-item-${item.nameItem}`)} />
          ))}
        </div>
      </section>
      <hr className="sidebar-hr" />
    </aside>
  );
}
