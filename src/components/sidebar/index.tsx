import React from 'react';
import { BotaoSideBar } from '../botaosidebar';
import { SideBarTitulo } from '../sidebartitulo';

export const SideBar: React.FC = () => {
  return (
    <div className="container-sidebar">
      <SideBarTitulo titulo="Comercial" />
      <BotaoSideBar botao="Análise do Pedido" />
      <BotaoSideBar botao="Lista de Preço" />
      <BotaoSideBar botao="Orçamento" />
      <BotaoSideBar botao="Termos e Condições" />
      <BotaoSideBar botao="Orçamentos Não Emitidos" />
      <BotaoSideBar botao="Orçamentos Pendentes" />
      <SideBarTitulo titulo="Financeiro" />
      <BotaoSideBar botao="Aguardando Faturamento" />
      <BotaoSideBar botao="Cálculo de Custo" />
      <BotaoSideBar botao="Faturamento Realizado" />
      <BotaoSideBar botao="Agências" />
      <BotaoSideBar botao="Bancos" />
      <BotaoSideBar botao="Lançamentos" />
      <BotaoSideBar botao="Resultado Mensal" />
      <SideBarTitulo titulo="Laboratórios" />
      <BotaoSideBar botao="Aguardando Agendamentos" />
      <BotaoSideBar botao="Aguardando Calibração" />
      <BotaoSideBar botao="Aguardando Certificado" />
      <BotaoSideBar botao="Calibrações Realizadas" />
      <BotaoSideBar botao="Contrato de Calibração" />
      <BotaoSideBar botao="Laudos Técnicos" />
      <BotaoSideBar botao="Manutenção e Garantia" />
      <BotaoSideBar botao="Agendamentos" />
      <BotaoSideBar botao="Aguardando Agendamentos" />
      <BotaoSideBar botao="Aguardando Calibração" />
      <BotaoSideBar botao="Aguardando Certificado" />
      <BotaoSideBar botao="Calibrações Realizadas" />
      <BotaoSideBar botao="Contrato de Calibração" />
      <BotaoSideBar botao="Laudos Técnicos" />
      <BotaoSideBar botao="Manutenção e Garantia" />
      <BotaoSideBar botao="Agendamentos" />
      <BotaoSideBar botao="Ordens de Serviço" />
      <BotaoSideBar botao="Ordens de Serviço In-Loco" />
      <BotaoSideBar botao="Remessa Laboratótio Externo" />
      <BotaoSideBar botao="Reserva de números" />
      <SideBarTitulo titulo="Laboratório Online" />
      <BotaoSideBar botao="Orçamentos Recebidos" />
      <BotaoSideBar botao="Minhas Ordens de Serviço" />
    </div>
  );
};
