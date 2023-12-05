import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/routes';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import 'primereact/resources/primereact.min.css';
import './styles/main.css';

import 'primeicons/primeicons.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
