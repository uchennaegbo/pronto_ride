import React from 'react';
import Form from './LoginForm';


const Login = () => {
  return (
    <Form
      FormTitle="Login"
      formMessage="Don't have an account yet?"
      formLink="/sign-up"
      formAnchor="SignUp here."
    />
  );
};

export default Login;
