import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value
    });
    console.log({ [name]: value, ...values });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [callback, errors, isSubmitting]);
  console.log(values);

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useForm;
