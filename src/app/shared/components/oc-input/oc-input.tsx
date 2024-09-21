"use-client";
import "./oc-input.scss";
import OcIcon from "../oc-icon/oc-icon";

interface OcInputProps {
  placeholder: string;
  nameIcon?: string;  // Propiedad opcional para el nombre del ícono
  right?: boolean; 
  disabled?: boolean;
  bgColor?: string;
  borderRadius?: string;
}

export default function OcInput({
  disabled,
  bgColor,
  borderRadius,
  placeholder,
  right,
  nameIcon
}: Readonly<OcInputProps>) {
  const inputDisabled = disabled || false;
  const inputBorderRadius = borderRadius || "medium";

  // Función para aplicar estilos dinámicos
  function inputStyles(): Record<string, string> {
    return {
      "--bg-color": bgColor || "white",
    };
  }

  return (
   <div className={`oc-input ${right ? 'input-right' : 'input-left'}`} style={inputStyles()}>
   {nameIcon && (
     <div className={`oc-icon-container ${right ? 'input-right' : 'input-left'}`}>
       <OcIcon name={nameIcon} />
     </div>
   )}
   
   <input
     type="text"
     placeholder={placeholder}
     className={`oc-shape-${inputBorderRadius} ${right ? 'oc-padding-right' : 'oc-padding-left'} oc-padding-small`}
     disabled={inputDisabled}
     style={inputStyles()}
   />
 </div>
  );
}