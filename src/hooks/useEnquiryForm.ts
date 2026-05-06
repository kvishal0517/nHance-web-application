import { useState, type FormEvent } from 'react';

interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  profession: string;
  serviceInterest: string;
  description: string;
  budgetRange: string;
  timeline: string;
}

const initialFormData: EnquiryFormData = {
  fullName: '',
  email: '',
  phone: '',
  profession: '',
  serviceInterest: '',
  description: '',
  budgetRange: '',
  timeline: '',
};

export function useEnquiryForm() {
  const [formData, setFormData] = useState<EnquiryFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (field: keyof EnquiryFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const webhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL;

      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            ...formData,
          }),
        });
      }

      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, handleChange, handleSubmit, isSubmitting, submitStatus };
}
