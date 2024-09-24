'use-client';
import './oc-icon.scss';
interface OcIconProps {
  name: string;
  bgColor?: string;
  padding?: string;
  borderRadius?: string;
}

export default function OcIcon({ name, bgColor, padding, borderRadius }: Readonly<OcIconProps>) {
  const iconBgColor = bgColor || 'transparent',
    iconBorderRadius = borderRadius || 'medium',
    iconPadding = padding || 'small',
    iconClass = `
          ${iconBgColor}
          oc-shape-${iconBorderRadius} 
          oc-padding-${iconPadding} 
          oc-icon-container`;

  return (
    <div className={iconClass}>
      <span className="oc-icon material-symbols-outlined">{name}</span>
    </div>
  );
}
