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
  const iconBgColor = bgColor || "transparent",
        iconBorderRadius = borderRadius || "medium",
        iconPadding = padding || "small",
        iconClass = `
          ${iconBgColor}
          oc-shape-${iconBorderRadius} 
          oc-padding-${iconPadding} 
          oc-icon-container`;

  function iconStyles(): Record<string, string>{
    return {
      "--color": color || "var(--oc-sys-color-typo-text)",
    }
  }

  return (
    <div className={iconClass}>
      <span className="oc-icon material-symbols-outlined" style={iconStyles()}>{name}</span>
    </div>
  )
}
