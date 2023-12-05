import { Route, Routes } from 'react-router-dom';
import { Layout } from '../pages/Layout';
import { Detalhes } from '../pages/Detalhes';
import { Login } from '../pages/login';
import { Home } from '../pages/Home';
type RouteProps = {
  path: string;
  element: React.ReactNode;
};

export const AppRoutes: React.FC = () => {
  const routes: RouteProps[] = [
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/orcamento',
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: '/detalhes/:id',
      element: (
        <Layout>
          <Detalhes />
        </Layout>
      ),
    },
  ];
  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  );
};
