import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';

export const MenuBar: React.FC = () => {
  const items: MenuItem[] = [
    { label: 'Comercial' },
    { label: 'Lista de Orçamento' },
  ];
  const home: MenuItem = { icon: 'pi pi-home', url: 'https://primereact.org' };

  return <BreadCrumb model={items} home={home} />;
};
