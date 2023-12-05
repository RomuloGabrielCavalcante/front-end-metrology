import React from 'react';
import { Button } from 'primereact/button';

type SidebarbotaoProps = {
  botao?: string;
};

export const BotaoSideBar: React.FC<SidebarbotaoProps> = ({ botao }) => {
  return (
    <div className="container-botao-sidebar">
      <Button label={botao} severity="secondary" text icon="pi pi-home" />
    </div>
  );
};
