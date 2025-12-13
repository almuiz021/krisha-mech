'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import FormField from '@/components/forms/FormField';

interface DownloadFormProps {
  brochure: string; // brochure url (required)
  machineName?: string; // optional - for EmailJS template
}

export default function DownloadForm({
  brochure,
  machineName,
}: DownloadFormProps) {
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
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      //   await emailjs.send(
      //     'YOUR_SERVICE_ID',
      //     'YOUR_TEMPLATE_ID',
      //     formData,
      //     'YOUR_PUBLIC_KEY',
      //   );

      console.log('FORM-DATA', formData);
      setSuccess('Form submitted successfully! Downloading brochure...');

      // Trigger brochure download
      const link = document.createElement('a');
      link.href = brochure;
      link.download = brochure.split('/').pop() ?? 'brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset form
      setFormData({
        name: '',
        company: '',
        designation: '',
        email: '',
        phone: '',
        machine: machineName ?? '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSuccess('Failed to send. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-white 
        shadow-card-sm 
        rounded-xl 
        p-6
        flex 
        flex-col 
        gap-4
        w-full
      "
    >
      {/* NAME */}
      <FormField
        label="Name"
        name="name"
        required
        value={formData.name}
        onChange={update}
      />

      {/* COMPANY */}
      <FormField
        label="Company Name"
        name="company"
        required
        value={formData.company}
        onChange={update}
      />

      {/* DESIGNATION */}
      <FormField
        label="Designation"
        name="designation"
        required
        value={formData.designation}
        onChange={update}
      />

      {/* EMAIL */}
      <FormField
        label="Email ID"
        name="email"
        required
        type="email"
        value={formData.email}
        onChange={update}
      />

      {/* PHONE */}
      <FormField
        label="Phone Number"
        name="phone"
        required
        type="tel"
        value={formData.phone}
        onChange={update}
      />

      <button
        type="submit"
        disabled={loading}
        className={`
          mt-2
          cursor-pointer
          bg-brand
          hover:bg-brand-600
          text-on-brand
          py-3 
          rounded-xl 
          font-semibold 
          transition
          ${loading ? 'opacity-70 cursor-not-allowed' : ''}
        `}
      >
        {loading ? 'Sending...' : 'Download Brochure'}
      </button>

      {success && (
        <p className="mt-2 text-center text-sm text-panel">{success}</p>
      )}
    </form>
  );
}
