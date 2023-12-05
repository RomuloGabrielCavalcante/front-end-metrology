import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';

export const PopupUser: React.FC = () => {
  const menuLeft = useRef<Menu>(null);
  const menuRight = useRef<Menu>(null);
  const items: MenuItem[] = [
    {
      label: 'Navigate',
      items: [
        {
          label: 'Perfil',
          icon: 'pi pi-user',
          url: '#',
        },
        {
          label: 'Sair',
          icon: 'pi pi-sign-out',
          command: () => {},
        },
      ],
    },
  ];

  return (
    <div className="card flex justify-content-center">
      <Menu model={items} popup ref={menuLeft} id="popup_menu_left" />

      <Menu
        model={items}
        popup
        ref={menuRight}
        id="popup_menu_right"
        popupAlignment="right"
      />
      <Button
        label="Conta"
        icon="pi pi-angle-down"
        className="mr-2"
        onClick={(event) => menuRight?.current?.toggle(event)}
        aria-controls="popup_menu_right"
        aria-haspopup
        size="small"
      />
    </div>
  );
};
