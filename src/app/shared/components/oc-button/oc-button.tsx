'use-client';
import './oc-button.scss';
interface OcButtonProps {
  disabled?: boolean;
  onClick?: () => void;
  bgColor?: string;
  children?: string;
  borderRadius?: string;
}

export default function OcButton({ disabled, onClick, bgColor, children, borderRadius }: Readonly<OcButtonProps>) {
  const buttonDisabled = disabled || false,
    buttonBorderRadius = borderRadius || 'medium',
    buttonOnClick = onClick || (() => {});

  function iconStyles(): Record<string, string> {
    return {
      '--bg-color': bgColor || 'blue',
    };
  }

  return (
    <button
      className={`oc-button oc-typo-text-contrast oc-shape-${buttonBorderRadius} oc-padding-small ${buttonBorderRadius}`}
      style={iconStyles()}
      disabled={buttonDisabled}
      onClick={buttonOnClick}
    >
      {children}
    </button>
  );
}
