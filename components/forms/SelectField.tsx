'use client';

import React from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  options: SelectOption[];
  required?: boolean;
  placeholder?: string; // will render as a disabled option if provided
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

/**
 * Reusable SelectField component consistent with FormField styling.
 * - Keeps the same accessible label pattern
 * - Uses your theme tokens for colors / focus
 */
export default function SelectField({
  label,
  name,
  value,
  options,
  required = false,
  placeholder,
  disabled = false,
  onChange,
  className = '',
}: SelectFieldProps) {
  return (
    <div className={`w-full ${className}`}>
      <label className="block text-panel font-semibold">
        {label} {required && '*'}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className="
          w-full
          border border-muted
          rounded-lg
          px-3 py-2 mt-1
          text-text-main
          bg-white
          focus:outline-brand focus:ring-1 focus:ring-brand
          appearance-none
        "
      >
        {placeholder && (
          <option
            value=""
            disabled
          >
            {placeholder}
          </option>
        )}

        {options.map(opt => (
          <option
            key={opt.value}
            value={opt.value}
            disabled={opt.disabled}
          >
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
