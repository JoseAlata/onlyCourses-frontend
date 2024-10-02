import { useState, useEffect } from 'react';

import './oc-input.scss';
import OcIcon from '../oc-icon/oc-icon';

interface OcInputProps {
  placeholder: string;
  type?: string;
  nameIcon?: string;
  right?: boolean;
  disabled?: boolean;
  rules?: Array<(value: string) => string | true>;
  onFocus?: () => void; // Evento onFocus opcional
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Evento onChange opcional
  value?: string; // Agregamos la prop value
}

export default function OcInput({
  type = 'text',
  disabled,
  placeholder,
  right,
  nameIcon,
  rules = [],
  onFocus, // Capturamos onFocus
  onChange, // Capturamos onChange
  value, // Capturamos la prop value
}: Readonly<OcInputProps>) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const inputDisabled = disabled || false;

  useEffect(() => {
    const validate = () => {
      if (value) {
        for (const rule of rules) {
          const result = rule(value);
          if (result !== true) {
            setErrorMessage(result);
            return;
          }
        }
        setErrorMessage(null);
      }
    };

    validate();
  }, [value, rules]);

  return (
    <div className="oc-input">
      <div className={`oc-input-wrapper ${inputDisabled ? 'disabled' : ''}`}>
        {nameIcon && (
          <div className={`oc-icon-container ${right ? 'input-right' : 'input-left'}`}>
            <OcIcon name={nameIcon} />
          </div>
        )}

        <input
          type={type}
          placeholder={placeholder}
          value={value} // Utilizamos la prop value directamente
          onChange={(e) => {
            if (onChange) {
              onChange(e);
            }
          }}
          onFocus={onFocus}
          className={`oc-shape-medium ${nameIcon ? (right ? 'oc-padding-right' : 'oc-padding-left') : ''} oc-padding-small`}
          disabled={inputDisabled}
        />
      </div>
      {errorMessage && <div className="oc-error-message">{errorMessage}</div>}
    </div>
  );
}