import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../service/api';

type DataLogin = {
  accessToken: string;
};

export const LoginTemplate: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const login = async () => {
    const body = {
      email,
      password,
    };

    const { data } = await api.post<DataLogin>('/auth/login', body);
    if (data) {
      localStorage.setItem('token', data.accessToken);
      navigate('/orcamento');
    } else {
      alert('deu erro');
    }
  };

  return (
    <div className="container-login">
      <h1 className="login">LOGIN</h1>
      <i className="pi pi-user" style={{ fontSize: '2.5rem' }}></i>
      <div className="container-input">
        <h2>Username</h2>
        <InputText
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          placeholder="Email"
        />
      </div>
      <div>
        <h2>Password</h2>
        <InputText
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          placeholder="Password"
          type="password"
        />
      </div>
      <Button className="button" onClick={login}>
        Login
      </Button>
    </div>
  );
};
