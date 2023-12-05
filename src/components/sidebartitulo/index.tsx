import React from 'react';

type SidebarTituloProps = {
  titulo?: string;
};

export const SideBarTitulo: React.FC<SidebarTituloProps> = ({ titulo }) => {
  return (
    <div className="container-titulo">
      <h3 className="titulo">{titulo}</h3>
    </div>
  );
};
