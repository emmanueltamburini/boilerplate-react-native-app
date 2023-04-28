import {useState} from 'react';

export const useForm = <T extends Object>(initialForm: T) => {
  const [form, setForm] = useState(initialForm);

  const onChange = <K extends Object>(value: K, field: keyof T) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const setFormValue = (newForm: T, allValues = false) => {
    allValues ? setForm(newForm) : setForm({...form, ...newForm});
  };

  return {
    ...form,
    form,
    onChange,
    setFormValue,
  };
};
