import React from 'react';
import OcIcon from '../../oc-icon';
import './oc-menu-item.scss';

interface MenuItemProps {
  nameIcon: string;
  nameItem: string;
}
export default function MenuItem({ nameIcon, nameItem }: Readonly<MenuItemProps>) {
  return (
    <a href="#" className="oc-menu-item oc-shape-medium oc-padding-xsmall flex w-full items-center">
      <OcIcon name={nameIcon}></OcIcon>
      <span>{nameItem}</span>
    </a>
  );
}
