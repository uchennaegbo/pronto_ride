import React from 'react';
import Form from './SignUpForm';

const SignUp = () => {
  return (
    <Form
      FormTitle="Sign Up"
      formMessage="Already have an account?"
      formLink="/login"
      formAnchor="Login here."
    />
  );
};

export default SignUp;
