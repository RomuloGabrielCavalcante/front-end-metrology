// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable prettier/prettier */
// import React, { useCallback, useEffect, useState } from 'react';
// import { TabPanel, TabView } from 'primereact/tabview';
// import { DatatableDetalhes } from '../../../components/datatabledetalhes';
// import { InputTextArea } from '../../../components/inputtextarea';
// import { DetalhesOrcamento } from '../../../components/detalheorcamento';
// import { api } from '../../../service/api';
// import { useParams } from 'react-router-dom';

// export const EditOrcamento: React.FC = (data: any) => {

//   const [anoSelecionado, setAnoSelecionado] = useState('2023'); // Valor inicial do dropdown
//   const [statusSelecionado, setStatusSelecionado] = useState('Emitido'); // Valor inicial do dropdown

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const findAllOrcamento = useCallback(async () => {
//     const response = await api.get(
//       `/orcamento?ano=${anoSelecionado}&status=${statusSelecionado}`,
//     );
//     if (response) {
//       setData(response.data);
//       console.log(response.data);
//     }
//   }, [anoSelecionado, statusSelecionado]);

//   const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     const _filters = { ...filters };

//     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//     // @ts-ignore
//     _filters['global'].value = value;

//     setFilters(_filters);
//     setGlobalFilterValue(value);
//   };

//   const bodyTemplate = (rowData: any) => {
//     return (
//       <Button
//         onClick={() => navigate(`/detalhes/${rowData.id}`)}
//         size="small"
//         icon="pi pi-pencil"
//         text
//       ></Button>
//     );
//   };

//   const headerTemplate = () => {
//     return (
//       <div className="container-header-datatable">
//         <div className="container-dropdown">
//           <p>Ano: </p>
//           <Dropdown
//             value={anoSelecionado}
//             options={anoOrcamento}
//             onChange={(e) => setAnoSelecionado(e.value)}
//             placeholder="Selecione o Ano"
//           />
//           <p>Situação: </p>
//           <Dropdown
//             value={statusSelecionado}
//             options={statusOrcamento}
//             onChange={(e) => setStatusSelecionado(e.value)}
//             placeholder="Selecione o status"
//             className="p-column-filter"
//           />
//           <Button className="botao-config"> Configurações</Button>
//         </div>
//         <div>
//           <span className="p-input-icon-left">
//             <i className="pi pi-search" />
//             <InputText
//               value={globalFilterValue}
//               onChange={onGlobalFilterChange}
//               placeholder="Pesquisar"
//             />
//           </span>
//         </div>
//       </div>
//     );
//   };

//   useEffect(() => {
//     findAllOrcamento();
//   }, [findAllOrcamento]);

//    <TabView style={{ width: '83vw' }}>
//     <TabPanel header="Gerar Orçamento">
//       <DetalhesOrcamento />
//       <TabView>
//         <TabPanel header="Instrumentos">
//           <DatatableDetalhes />
//           <InputTextArea backendValue={'observacao'} />
//         </TabPanel>

//         <TabPanel header="Acréscimos"></TabPanel>
//         <TabPanel header="Termos e Condições"></TabPanel>
//         <TabPanel header="Pagamento"></TabPanel>
//       </TabView>
//     </TabPanel>
//     <TabView>
//       <TabPanel header="Instrumentos"></TabPanel>

//       <TabPanel header="Acréscimos"></TabPanel>
//       <TabPanel header="Termos e Condições"></TabPanel>
//       <TabPanel header="Pagamento"></TabPanel>
//     </TabView>
//     <TabPanel header="Análise de Pedido">a</TabPanel>
//   </TabView>;
// };
