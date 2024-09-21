"use-client"
import "./oc-icon.scss";
interface OcIconProps {
  name: string;
  color?: string;
  bgColor?: string;
  padding?: string;
  borderRadius?: string;
}

export default function OcIcon({ name, color, bgColor, padding, borderRadius }: Readonly<OcIconProps>) {
  const iconPadding = padding || "oc-padding-small",
        iconBorderRadius = borderRadius || "oc-shape-medium",
        iconBgColor = bgColor || "transparent",
        iconClass = `
          ${iconBgColor} 
          ${iconPadding} 
          ${iconBorderRadius} 
          oc-icon-container`;

  function iconStyles(): Record<string, string>{
    return {
      "--color": color || "var(--oc-sys-color-typography-text)",
    }
  }

  return (
    <div className={iconClass}>
      <span className="oc-icon material-symbols-outlined" style={iconStyles()}>{name}</span>
    </div>
  )
}
