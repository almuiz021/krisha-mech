'use client';

import { useEffect, useState } from 'react';
import FormField from '../forms/FormField';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  machineName?: string;
}

export default function ContactForm({ machineName }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    machine: machineName ?? '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  // If machineName changes (e.g. different product), sync it into the form
  useEffect(() => {
    if (machineName) {
      setFormData(prev => ({ ...prev, machine: machineName }));
    }
  }, [machineName]);

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // replace with your EmailJS template ID
        formData, // template params
        'YOUR_PUBLIC_KEY', // replace with your EmailJS public key
      );

      setSuccess('Form submitted successfully!');
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        machine: machineName ?? '',
        message: '',
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
        justify-between
        w-full
      "
    >
      <div className="flex flex-col gap-4">
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

        <div className="flex gap-2 sm:flex-row flex-col">
          <FormField
            label="Phone"
            name="phone"
            required
            value={formData.phone}
            onChange={update}
          />

          <FormField
            label="Email"
            name="email"
            required
            type="email"
            value={formData.email}
            onChange={update}
          />
        </div>

        <FormField
          label="Machine Interested In"
          name="machine"
          required
          value={formData.machine}
          onChange={update}
        />

        <FormField
          label="Message"
          name="message"
          textarea
          value={formData.message}
          onChange={update}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`
          mt-4
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
        {loading ? 'Sending...' : 'Submit'}
      </button>

      {success && (
        <p className="mt-4 text-center text-sm text-panel">{success}</p>
      )}
    </form>
  );
}
