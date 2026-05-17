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
      console.log('Attempting submission to:', webhookUrl ? 'URL defined' : 'URL UNDEFINED');

      if (webhookUrl && webhookUrl !== 'YOUR_DEPLOYED_APPS_SCRIPT_URL_HERE') {
        // We use exact keys from your list. 
        // Note: It is best to remove the space in your sheet header ' description'
        const rowData = {
          "timestamp": new Date().toLocaleString(),
          "fullName": formData.fullName.trim(),
          "email": formData.email.trim(),
          "phone": formData.phone.trim(),
          "profession": formData.profession,
          "serviceInterest": formData.serviceInterest,
          "description": formData.description.trim(),
          "budgetRange": formData.budgetRange,
          "timeline": formData.timeline
        };

        const payload = { data: [rowData] };
        console.log('Final Payload for SheetDB:', JSON.stringify(payload));

        const response = await fetch(webhookUrl.trim(), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        console.log('SheetDB Success:', result);
      }

      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitStatus('idle');
    setFormData(initialFormData);
  };

  return { formData, handleChange, handleSubmit, isSubmitting, submitStatus, resetForm };
}
