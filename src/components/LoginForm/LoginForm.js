import React from 'react';

import { LoginContainer, Form } from './LoginForm.styles';

const Login = ({ children }) => {
  return (
    <LoginContainer>
      <Form>{children}</Form>
    </LoginContainer>
  );
};

export default Login;
