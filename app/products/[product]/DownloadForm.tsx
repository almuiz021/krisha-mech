'use client';

import { useState } from 'react';
import FormField from '@/components/forms/FormField';
import SelectField from '@/components/forms/SelectField';
import { useMachineField } from '@/hooks/useMachineField';

interface DownloadFormProps {
  brochure: string;
  machineName?: string;
}

export default function DownloadForm({
  brochure,
  machineName,
}: DownloadFormProps) {
  const {
    productOptions,
    machineSelect,
    customMachine,
    setMachineSelect,
    setCustomMachine,
  } = useMachineField({ machineName });

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    designation: '',
    email: '',
    phone: '',
    machine: machineName ?? '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) =>
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleMachineSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setMachineSelect(value);

    if (value === 'other') {
      setFormData(prev => ({ ...prev, machine: customMachine }));
    } else {
      setCustomMachine('');
      setFormData(prev => ({ ...prev, machine: value }));
    }
  };

  const handleCustomMachineChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const value = e.target.value;
    setCustomMachine(value);
    setFormData(prev => ({ ...prev, machine: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const link = document.createElement('a');
      link.href = brochure;
      link.download = brochure.split('/').pop() ?? 'brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSuccess('Downloading brochure...');
      setLoading(false);
    }, 600);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-card-sm rounded-xl p-6 flex flex-col gap-4"
    >
      <div className="flex gap-2 sm:flex-row flex-col">
        <FormField
          label="Name"
          name="name"
          required
          value={formData.name}
          onChange={update}
        />
        <FormField
          label="Company Name"
          name="company"
          required
          value={formData.company}
          onChange={update}
        />
      </div>

      <div className="flex gap-2 sm:flex-row flex-col">
        <FormField
          label="Email ID"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={update}
        />
        <FormField
          label="Designation"
          name="designation"
          required
          value={formData.designation}
          onChange={update}
        />
      </div>

      <FormField
        label="Phone Number"
        name="phone"
        required
        value={formData.phone}
        onChange={update}
      />

      <div className="flex gap-2 sm:flex-row flex-col">
        <SelectField
          className="flex-1"
          label="Machine"
          value={machineSelect}
          required
          options={[
            { value: '', label: 'Select Machine' },
            ...productOptions,
            { value: 'other', label: 'Other (specify)' },
          ]}
          onChange={handleMachineSelect}
        />

        {machineSelect === 'other' && (
          <FormField
            label="Specify Machine"
            name="machine"
            required
            value={customMachine}
            onChange={handleCustomMachineChange}
          />
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-brand hover:bg-brand-600 text-on-brand py-3 rounded-xl font-semibold transition"
      >
        {loading ? 'Processing...' : 'Download Brochure'}
      </button>

      {success && <p className="text-sm text-center text-panel">{success}</p>}
    </form>
  );
}
