// /* eslint-disable prettier/prettier */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/explicit-function-return-type */
// import React, { useCallback, useEffect, useState } from 'react';
// import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
// import { InputText } from 'primereact/inputtext';
// import { Column, ColumnFilterElementTemplateOptions } from 'primereact/column';

// import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
// import { FilterMatchMode } from 'primereact/api';
// import { Button } from 'primereact/button';
// import { useNavigate } from 'react-router-dom';
// import { api } from '../../../service/api';

// export const Datatable: React.FC = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [filters, setFilters] = useState<DataTableFilterMeta>({
//     global: { value: null, matchMode: FilterMatchMode.CONTAINS },
//     dataOrcamento: { value: null, matchMode: FilterMatchMode.CONTAINS },
//   });
//   const [globalFilterValue, setGlobalFilterValue] = useState<string>('');
//   const [anoSelecionado, setAnoSelecionado] = useState('2023'); // Valor inicial do dropdown
//   const [statusSelecionado, setStatusSelecionado] = useState('Emitido'); // Valor inicial do dropdown
//   const anoOrcamento = [
//     { label: '2023', value: '2023' },
//     { label: '2022', value: '2022' },
//     { label: '2021', value: '2021' },
//     { label: '2020', value: '2020' },
//     { label: '2019', value: '2019' },
//     { label: '2018', value: '2018' },
//     { label: '2017', value: '2017' },
//     { label: '2016', value: '2016' },
//   ];
//   const statusOrcamento = [
//     { label: 'Reprovado', value: 'Reprovado' },
//     { label: 'Aprovado', value: 'Aprovado' },
//     { label: 'Emitido', value: 'Emitido' },
//     { label: 'Negociação', value: 'Negociação' },
//     { label: 'Rascunho', value: 'Rascunho' },
//     { label: 'Ordem de Serviço', value: 'Ordem de Serviço' },
//     { label: 'Pendente', value: 'Pendente' },
//     { label: 'Cancelado', value: 'Cancelado' },
//   ];

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

//   return (
//     <DataTable
//       header={headerTemplate}
//       value={data}
//       paginator
//       rows={15}
//       rowsPerPageOptions={[5, 10, 25, 50]}
//       tableStyle={{ minWidth: '50vw' }}
//       filters={filters}
//       globalFilterFields={[
//         'statusOrcamento.status',
//         'txOrcamento',
//         'cliente.txEmpresa',
//         'dataOrcamento',
//         'vlTotal',
//         'formaPagamento',
//         'pedido',
//         'txModify',
//         'interacaoCont',
//       ]}
//     >
//       {' '}
//       <Column
//         style={{ verticalAlign: 'center' }}
//         field="statusOrcamento.status"
//         header="Situação"
//         sortable
//       ></Column>
//       <Column
//         style={{ verticalAlign: 'center' }}
//         field="txOrcamento"
//         header="Orçamento"
//         sortable
//       ></Column>
//       <Column
//         style={{ verticalAlign: 'center' }}
//         field="cliente.txEmpresa"
//         header="Cliente"
//         sortable
//       ></Column>
//       <Column
//         style={{ verticalAlign: 'center' }}
//         field="vlTotal"
//         header="Valor"
//         sortable
//         body={(rowData: any) => {
//           const valor =
//             typeof rowData.vlTotal === 'number'
//               ? rowData.vlTotal
//               : parseFloat(rowData.vlTotal);

//           return valor.toLocaleString('pt-BR', {
//             style: 'currency',
//             currency: 'BRL',
//           });
//         }}
//       ></Column>
//       <Column
//         style={{ verticalAlign: 'center' }}
//         field="formaPagamento"
//         header="Forma de Pagamento"
//         sortable
//       ></Column>
//       <Column
//         style={{ verticalAlign: 'center' }}
//         field="pedido"
//         header="N° do Pedido"
//         sortable
//       ></Column>
//       <Column
//         style={{ verticalAlign: 'center' }}
//         field="txModify"
//         header="Responsavel"
//         sortable
//       ></Column>
//       <Column
//         style={{ verticalAlign: 'center' }}
//         field="interacaoCont"
//         header="Interação"
//         sortable
//       ></Column>{' '}
//       <Column
//         style={{ verticalAlign: 'center' }}
//         field="dataOrcamento"
//         header="Data do Orçamento"
//         sortable
//       ></Column>
//       <Column body={bodyTemplate}></Column>
//     </DataTable>
//   );
// };
