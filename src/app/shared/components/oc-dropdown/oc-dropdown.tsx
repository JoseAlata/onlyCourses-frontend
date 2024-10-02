import { useState, useEffect, useRef } from 'react';
import OcInput from '../oc-input/oc-input'; // Asegúrate de que la ruta sea correcta
import './oc-dropdown.scss';

interface OcInputProps {
  placeholder: string;
  type?: string;
  nameIcon?: string;
  right?: boolean;
  disabled?: boolean;
  rules?: Array<(value: string) => string | true>;
}

interface DropdownProps extends OcInputProps {
  options: string[];
}

export default function Dropdown({ placeholder, type, nameIcon, right, disabled, rules, options }: DropdownProps) {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState(false);
  const filteredOptions = options.filter((option) => option.toLowerCase().includes(inputValue.toLowerCase()));

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value) {
      setIsOpen(true);
      setOptionSelected(false);
    } else {
      setIsOpen(false);
    }
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setOptionSelected(true);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <OcInput
        placeholder={placeholder}
        type={type}
        nameIcon={nameIcon}
        right={right}
        disabled={disabled}
        rules={rules}
        onFocus={handleFocus}
        onChange={handleChange}
        value={inputValue}
      />
      {isOpen && !optionSelected && (
        <ul className="dropdown-list">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li key={index} className="dropdown-item" onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))
          ) : (
            <li className="dropdown-item">No hay opciones</li>
          )}
        </ul>
      )}
    </div>
  );
}
