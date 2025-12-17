'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import FormField from '../forms/FormField';
import SelectField from '../forms/SelectField';
import { useMachineField } from '@/hooks/useMachineField';

interface ContactFormProps {
  machineName?: string;
}

export default function ContactForm({ machineName }: ContactFormProps) {
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
    phone: '',
    email: '',
    machine: machineName ?? '',
    message: '',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      await emailjs.send(
        'service_gj6pe98',
        'template_2f8ms3v',
        formData,
        'XeqgUEcI3zhTxt15D',
      );

      setSuccess('Form submitted successfully!');
      setFormData({
        name: '',
        company: '',
        designation: '',
        phone: '',
        email: '',
        machine: machineName ?? '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      setSuccess('Failed to send. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-card-sm rounded-xl p-6 flex flex-col gap-4"
    >
      {/* Name + Company */}
      <div className="flex gap-2 sm:flex-row flex-col">
        <FormField
          label="Name"
          name="name"
          required
          value={formData.name}
          onChange={update}
        />
        <FormField
          label="Company"
          name="company"
          required
          value={formData.company}
          onChange={update}
        />
      </div>

      {/* Designation + Email */}
      <div className="flex gap-2 sm:flex-row flex-col">
        <FormField
          label="Designation"
          name="designation"
          required
          value={formData.designation}
          onChange={update}
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={update}
        />
      </div>

      {/* Phone */}
      <FormField
        label="Phone"
        name="phone"
        required
        value={formData.phone}
        onChange={update}
      />

      {/* Machine selection */}
      <div className="flex gap-2 sm:flex-row flex-col">
        <SelectField
          className="flex-1"
          name="machine"
          label="Machine Interested In"
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
            className="flex-1"
            label="Specify Machine"
            name="machine"
            required
            value={customMachine}
            onChange={handleCustomMachineChange}
          />
        )}
      </div>

      {/* Message */}
      <FormField
        label="Message"
        name="message"
        textarea
        value={formData.message}
        onChange={update}
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-brand hover:bg-brand-600 text-on-brand py-3 rounded-xl font-semibold transition"
      >
        {loading ? 'Sending...' : 'Submit'}
      </button>

      {success && <p className="text-sm text-center text-panel">{success}</p>}
    </form>
  );
}
