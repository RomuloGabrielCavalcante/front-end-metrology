/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { DetalhesOrcamento } from '../detalheorcamento';

// import { InputTextArea } from '../inputtextarea';

export const TabViewComponent: React.FC = () => {
  return (
    <div className="card">
      <TabView style={{ width: '83vw' }}>
        <TabPanel header="Gerar Orçamento">
          <DetalhesOrcamento />
        </TabPanel>
      </TabView>
    </div>
  );
};
