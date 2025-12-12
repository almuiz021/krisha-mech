'use client';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  textarea?: boolean;
}

export default function FormField({
  label,
  name,
  type = 'text',
  required = false,
  value,
  onChange,
  textarea = false,
}: FormFieldProps) {
  return (
    <div className="w-full">
      {/* LABEL */}
      <label className="block text-panel font-semibold">
        {label} {required && '*'}
      </label>

      {/* INPUT / TEXTAREA */}
      {textarea ? (
        <textarea
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          rows={3}
          className="
            w-full 
            border border-muted 
            rounded-lg 
            px-3 py-2 mt-1
            text-text-main
            focus:outline-brand 
            focus:ring-1 focus:ring-brand
            bg-white
          "
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className="
            w-full 
            border border-muted 
            rounded-lg 
            px-3 py-2 mt-1
            text-text-main
            focus:outline-brand 
            focus:ring-1 focus:ring-brand
            bg-white
          "
        />
      )}
    </div>
  );
}
