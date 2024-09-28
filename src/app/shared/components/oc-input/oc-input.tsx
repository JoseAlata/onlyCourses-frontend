'use client';
import { useState, useEffect } from 'react';

import './oc-input.scss';
import OcIcon from '../oc-icon/oc-icon';

interface OcInputProps {
  placeholder: string;
  nameIcon?: string;
  right?: boolean;
  disabled?: boolean;
  rules?: Array<(value: string) => string | true>;
}

export default function OcInput({ disabled, placeholder, right, nameIcon, rules = [] }: Readonly<OcInputProps>) {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const inputDisabled = disabled || false;

  useEffect(() => {
    const validate = () => {
      for (let rule of rules) {
        const result = rule(inputValue);
        if (result !== true) {
          setErrorMessage(result);
          return;
        }
      }
      setErrorMessage(null);
    };

    validate();
  }, [inputValue, rules]);

  return (
    <div className="oc-input">
      <div className={`oc-input-wrapper ${inputDisabled ? 'disabled' : ''}`}>
        {nameIcon && (
          <div className={`oc-icon-container ${right ? 'input-right' : 'input-left'}`}>
            <OcIcon name={nameIcon} />
          </div>
        )}

        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={`oc-shape-medium ${nameIcon ? (right ? 'oc-padding-right' : 'oc-padding-left') : ''} oc-padding-small`}
          disabled={inputDisabled}
        />
      </div>
      {errorMessage && <div className="oc-error-message">{errorMessage}</div>}
    </div>
  );
}
