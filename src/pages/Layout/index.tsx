import { SideBar } from '../../components/sidebar';
import { Header } from '../../components/header';

type LayoutProps = {
  children: JSX.Element;
};
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container-layout">
      <Header />
      <div className="container-main-layout">
        <SideBar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};
