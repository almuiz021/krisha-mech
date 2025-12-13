'use client';

import { useEffect, useMemo, useState } from 'react';
import FormField from '../forms/FormField';
import SelectField from '../forms/SelectField';
import emailjs from '@emailjs/browser';
import { ourProducts, techPartnersProducts } from '@/data/productsContent';

interface ContactFormProps {
  machineName?: string;
}

export default function ContactForm({ machineName }: ContactFormProps) {
  // Build product options from data (unique product names)
  const productOptions = useMemo(() => {
    const names = new Set<string>();
    const addFrom = (list: typeof ourProducts) =>
      list.forEach(cat =>
        cat.products.forEach(p => names.add(String(p.name ?? ''))),
      );
    addFrom(ourProducts);
    addFrom(techPartnersProducts);
    // convert to array of {value,label}
    return Array.from(names).map(name => ({ value: name, label: name }));
  }, []);

  // form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    machine: machineName ?? '',
    message: '',
  });

  const [machineSelect, setMachineSelect] = useState<string>(
    machineName && machineName !== '' ? machineName : '',
  );

  const [customMachine, setCustomMachine] = useState<string>('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  // If machineName prop changes, sync it into the select / custom field truthfully
  useEffect(() => {
    if (!machineName) {
      setMachineSelect('');
      setCustomMachine('');
      setFormData(prev => ({ ...prev, machine: '' }));
      return;
    }

    // check if machineName matches any known product name (case-sensitive exact)
    const found = productOptions.find(opt => opt.value === machineName);

    if (found) {
      setMachineSelect(found.value);
      setCustomMachine('');
      setFormData(prev => ({ ...prev, machine: found.value }));
    } else {
      // treat as custom value
      setMachineSelect('other');
      setCustomMachine(machineName);
      setFormData(prev => ({ ...prev, machine: machineName }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [machineName, productOptions]);

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // handler for select change (HTMLSelectElement)
  const handleMachineSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value;
    setMachineSelect(v);

    if (v === 'other') {
      // switch to custom input but keep existing customMachine or blank
      setFormData(prev => ({ ...prev, machine: customMachine }));
    } else {
      setCustomMachine(''); // clear custom
      setFormData(prev => ({ ...prev, machine: v }));
    }
  };

  // handler for custom machine input
  const handleCustomMachineChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const val = e.target.value;
    setCustomMachine(val);
    setFormData(prev => ({ ...prev, machine: val }));
  };

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

      // Reset select/custom only if machineName wasn't provided (keep prop-driven value)
      if (!machineName) {
        setMachineSelect('');
        setCustomMachine('');
      }
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

        {/* Machine select (populated from productsContent) */}
        <div className="flex gap-2 sm:flex-row flex-col">
          <SelectField
            className="flex-1"
            label="Machine Interested In"
            name="machineSelect"
            value={machineSelect ?? ''}
            options={[
              { value: '', label: 'Select Machine' },
              // map product options
              ...productOptions.map(opt => ({
                value: opt.value,
                label: opt.label,
              })),
              { value: 'other', label: 'Other (specify)' },
            ]}
            required
            placeholder="Select machine"
            onChange={handleMachineSelect}
          />

          {/* If user selected Other OR machineName is a custom string, show a small text input to type the custom machine */}
          {machineSelect === 'other' && (
            <div className=" flex-1">
              <FormField
                label="Specify Machine"
                name="machine"
                required
                value={customMachine}
                onChange={handleCustomMachineChange}
              />
            </div>
          )}
        </div>

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
