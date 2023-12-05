import { Datatable } from '../../components/datatable';

import { MenuBar } from '../../components/menubar';

export const Home: React.FC = () => {
  return (
    <div className="container-home-datatable">
      <div className="menubar">
        <MenuBar />
      </div>
      <div className="container-datatable">
        <Datatable />
      </div>
    </div>
  );
};
