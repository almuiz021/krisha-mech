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
  textarea?: boolean; // if true → render textarea
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
      <label className="block text-[#222] font-semibold">
        {label} {required && '*'}
      </label>

      {textarea ? (
        <textarea
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          rows={3}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-[#E30613]"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:outline-[#E30613]"
        />
      )}
    </div>
  );
}
