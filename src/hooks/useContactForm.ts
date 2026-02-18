import { ChangeEvent, useState } from 'react';

export type ContactFormState = {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
};

const initialState: ContactFormState = {
  name: '',
  email: '',
  message: '',
  privacy: false,
};

export const useContactForm = () => {
  const [form, setForm] = useState<ContactFormState>(initialState);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { id, value, type } = target;

    setForm(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? target.checked : value,
    }));
  };

  const reset = () => setForm(initialState);

  return {
    form,
    onChange,
    reset,
  };
};
