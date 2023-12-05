/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Dropdown } from 'primereact/dropdown';
import { InputTextarea } from 'primereact/inputtextarea';
import { TabView, TabPanel } from 'primereact/tabview';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { api } from '../../service/api';
import {
  InputNumber,
  InputNumberValueChangeEvent,
} from 'primereact/inputnumber';
import { Editor, EditorTextChangeEvent } from 'primereact/editor';

interface Cliente {
  id: string;
  txEmpresa: string;
}

interface Contato {
  nome: string;
}

interface PrecoLista {
  listaPreco: string;
}

interface OrcamentoItem {
  quantidade: number;
  familia: {
    txFamilia: string;
  };
  identificacao: string;
  fabricante: {
    nome: string;
  };
  txModelo: string;
  capacidade: string;
  faixaTrabalho: string;
  desconto: string;
  valor: string;
}

interface Prioridade {
  id: string;
}

interface Orcamento {
  prioridade: any;
  acrescimo: any[];
  cliente: Cliente;
  contato: Contato;
  formaPagamento: any;
  obsTecnica: any;
  observacao: string;
  orcamentoItem: OrcamentoItem[];
  prazoPagamento: any;
  precoLista: PrecoLista;
  subTotal: string;
  txOrcamento: string;
  txTermo: string;
  vlTotal: string;
  vlDesconto: number;
}

const schema = yup
  .object()
  .shape({
    cliente: yup.string().required(),
    contato: yup.string().required(),
    prioridade: yup.string().required(),
    lista_precos: yup.string().required(),
    observacao: yup.string().required(),
    obsTecnica: yup.string().required(),
    nome_acrescimo: yup.array().of(yup.object()).required(),
    valor_acrescimo: yup.array().of(yup.object()).required(),
    condicao: yup.string().required(),
    forma_pagamento: yup.string().required(),
    prazo_pagamento: yup.string().required(),
  })
  .required();

export const DetalhesOrcamento: React.FC = () => {
  const { register, handleSubmit, control, setValue, getValues, watch } =
    useForm({
      resolver: yupResolver(schema),
    });

  const [prioridadeLista, setPrioridadeLista] = useState<Prioridade[]>([]);
  const [formaPagamento, setFormaPagamento] = useState<Prioridade[]>([]);
  const [prazoPagamento, setPrazoPagamento] = useState<Prioridade[]>([]);
  const [precoLista, setPrecoLista] = useState<PrecoLista[]>([]);
  const [clienteLista, setClienteLista] = useState<[]>([]);
  const [contatoLista, setContatoLista] = useState<Contato[]>([]);
  const { id } = useParams();
  const [data, setData] = useState<Orcamento | undefined>();
  const [orcamentoItem, setOrcamentoItem] = useState<OrcamentoItem[]>([]);
  const [text, setText] = useState();
  const [condicao, setCondicao] = useState<any>();

  const valorAcrescimo = data?.acrescimo?.[0]?.valorAcrescimo;

  const findAllContato = useCallback(async (id: string) => {
    const response = await api.get<Contato[]>(`/contato/${id}`);
    if (response) {
      setContatoLista(response.data);
    }
  }, []);

  const findOnePrioridade = useCallback(async (e: string) => {
    const response = await api.get<Prioridade[]>(`/prioridade/`);
    if (response) {
      setPrioridadeLista(response.data);
    }
  }, []);

  const findOneListaPrecos = useCallback(async (e: string) => {
    const response = await api.get<PrecoLista[]>(`/preco-lista/listapreco/`);
    if (response) {
      setPrecoLista(response.data);
    }
  }, []);

  const findOneOrcamento = useCallback(async () => {
    const { data } = await api.get<Orcamento>(`/orcamento/${id}`);
    if (data) {
      console.log(data);
      setData(data);

      setValue('cliente', data.cliente.id as string);
      if (data.contato !== undefined) {
        findAllContato(data.cliente.id);
        if (data.contato.nome !== undefined) {
          setValue('contato', data.contato.nome as string);
        }
      }
      setValue('observacao', data.observacao);
      setValue('condicao', data.txTermo);
      setValue('forma_pagamento', data.formaPagamento);
      setValue('nome_acrescimo', data.acrescimo);

      setValue('obsTecnica', data.obsTecnica as string);
      if (data.prioridade !== undefined) {
        findOnePrioridade(data.prioridade);
        if (data.prioridade.id !== undefined) {
          setValue('prioridade', data.prioridade.id as string);
        }
      }

      setValue('lista_precos', data.precoLista.listaPreco as string);
      findOneListaPrecos(data.precoLista.listaPreco);

      setValue('lista_precos', data.precoLista.listaPreco as string);
      findOneListaPrecos(data.precoLista.listaPreco);
    }
  }, [
    id,
    setValue,
    // getValues,
    findOneListaPrecos,
    findAllContato,
    findOnePrioridade,
  ]);

  const findAllClientes = useCallback(async () => {
    const { data } = await api.get('/empresa/clientes');
    if (data) {
      setClienteLista(data);
    }
  }, []);

  const findOneDetalheDatatable = useCallback(async () => {
    const response = await api.get(`/orcamento-item/${id}`);
    if (response) {
      setOrcamentoItem([response.data]);
    }
  }, [id]);

  const findOneCondicao = useCallback(async () => {
    const response = await api.get(`/condicao/1279`);
    if (response) {
      setCondicao(response.data);
    }
  }, []);

  const findOneFormaPagamento = useCallback(async () => {
    const response = await api.get(`/formapagamento/1279`);
    if (response) {
      setFormaPagamento(response.data);
      console.log(response.data);
    }
  }, []);

  const findOnePrazoPagamento = useCallback(async () => {
    const response = await api.get(`/prazo-pagamento/1279`);
    if (response) {
      setPrazoPagamento(response.data);
      console.log(response.data);
    }
  }, []);

  useEffect(() => {
    findOneOrcamento();
    findAllClientes();
    findOneDetalheDatatable();
    findOneCondicao();
    findOneFormaPagamento();
    findOnePrazoPagamento();
  }, [
    findOneOrcamento,
    findAllClientes,
    findOneDetalheDatatable,
    findOneCondicao,
    findOneFormaPagamento,
    findOnePrazoPagamento,
  ]);

  return (
    <>
      <div className="container-orcamento">
        <h1>Orçamento N°:</h1>
        <h1 className="orcamento">{data?.txOrcamento}</h1>
      </div>
      <div className="container-dropdown">
        <h1>Cliente: </h1>
        <Controller
          name="cliente"
          control={control}
          render={({ field }) => (
            <Dropdown
              value={field.value}
              options={clienteLista}
              onChange={(e) => {
                field.onChange(e.value);
                findOneListaPrecos(e.value);
                findAllContato(e.value);
                findOnePrioridade(e.value);
              }}
              optionLabel="txEmpresa"
              optionValue="id"
              placeholder="Selecione o Cliente"
            />
          )}
        />
      </div>
      <div className="container-dropdown">
        <h1>Contato: </h1>
        <Controller
          name="contato"
          control={control}
          render={({ field }) => (
            <Dropdown
              value={field.value}
              options={contatoLista}
              onChange={(e) => field.onChange(e.value)}
              optionLabel="nome"
              optionValue="nome"
              placeholder="Selecione o Contato"
            />
          )}
        />
      </div>
      <div className="container-dropdown">
        <h1>Prioridade: </h1>
        <Controller
          name="prioridade"
          control={control}
          render={({ field }) => (
            <Dropdown
              value={field.value}
              options={prioridadeLista}
              onChange={(e) => field.onChange(e.value)}
              optionLabel="prioridade"
              optionValue="id"
              placeholder="Selecione a Prioridade"
            />
          )}
        />
      </div>
      <div className="container-dropdown">
        <h1>Lista de preços: </h1>
        <Controller
          name="lista_precos"
          control={control}
          render={({ field }) => (
            <Dropdown
              value={field.value}
              options={precoLista}
              optionLabel="listaPreco"
              optionValue="listaPreco"
              onChange={(e) => field.onChange(e.value)}
              placeholder="Selecione o Preço"
            />
          )}
        />
      </div>
      <TabView>
        <TabPanel header="Instrumentos">
          <div className="card">
            <DataTable
              value={data?.orcamentoItem}
              paginator
              rows={15}
              rowsPerPageOptions={[5, 10, 25, 50]}
            >
              <Column
                style={{ verticalAlign: 'center' }}
                field="quantidade"
                header="Quantidade"
                sortable
              ></Column>
              <Column
                field="familia.txFamilia"
                header="Instrumento"
                sortable
                style={{ verticalAlign: 'center' }}
              ></Column>
              <Column
                field="identificacao"
                header="Identificação"
                sortable
                style={{ verticalAlign: 'center' }}
              ></Column>
              <Column
                field="fabricante.nome"
                header="Fabricante"
                sortable
                style={{ verticalAlign: 'center' }}
              ></Column>
              <Column
                field="txModelo"
                header="Modelo"
                sortable
                style={{ verticalAlign: 'center' }}
              ></Column>
              <Column
                field="capacidade"
                header="Capacidade"
                sortable
                style={{ verticalAlign: 'center' }}
              ></Column>
              <Column
                field="faixaTrabalho"
                header="Faixa de Trabalho"
                sortable
                style={{ verticalAlign: 'center' }}
              ></Column>
              <Column
                field="desconto"
                header="Descontos"
                sortable
                style={{ verticalAlign: 'center' }}
              ></Column>
              <Column
                field="valor"
                header="Valor"
                sortable
                style={{ verticalAlign: 'center' }}
                body={(rowData: any) => {
                  const valor =
                    typeof rowData.valor === 'number'
                      ? rowData.valor
                      : parseFloat(rowData.valor);

                  return valor.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  });
                }}
              ></Column>
            </DataTable>
          </div>
        </TabPanel>
        <TabPanel header="Acréscimos">
          <div className="m-0">
            <DataTable
              value={data?.acrescimo}
              paginator
              rows={15}
              rowsPerPageOptions={[5, 10, 25, 50]}
            >
              <Column
                style={{ verticalAlign: 'center' }}
                field="NomeAcrescimo"
                header="Nome"
                sortable
              ></Column>
              <Column
                field="valorAcrescimo"
                header="Valor"
                sortable
                style={{ verticalAlign: 'center' }}
              ></Column>
            </DataTable>
          </div>
        </TabPanel>
        <TabPanel header="Termos e Condições">
          <div className="container-orcamento">
            <h3>Termos e condições:</h3>
            <div className="">
              <Controller
                name="condicao"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    value={field.value}
                    options={condicao}
                    optionLabel="txNome"
                    optionValue="condicao"
                    onChange={(e) => field.onChange(e.value)}
                    placeholder="Selecione o Preço"
                  />
                )}
              />
            </div>
          </div>
          <Editor value={watch('condicao')} style={{ height: '320px' }} />
        </TabPanel>
        <TabPanel header="Termos e Condições">
          <div className="container-orcamento">
            <h1>Forma Pagamento:</h1>
            <Controller
              name="forma_pagamento"
              control={control}
              render={({ field }) => (
                <Dropdown
                  value={field.value}
                  options={formaPagamento}
                  optionLabel="formaPagamento"
                  optionValue="formaPagamento"
                  onChange={(e) => field.onChange(e.value)}
                  placeholder="Selecione a Forma de Pagamento"
                />
              )}
            />
          </div>
          <div className="container-orcamento">
            <h1>Prazo Pagamento:</h1>
            <Controller
              name="prazo_pagamento"
              control={control}
              render={({ field }) => (
                <Dropdown
                  value={field.value}
                  options={prazoPagamento}
                  optionLabel="prazoPagamento"
                  optionValue="prazoPagamento"
                  onChange={(e) => field.onChange(e.value)}
                  placeholder="Selecione o Prazo"
                />
              )}
            />
          </div>
        </TabPanel>
      </TabView>
      <div className="textarea-container">
        <div className="textarea">
          <h3>Observação para cliente</h3>
          <InputTextarea rows={10} {...register('observacao')} />
        </div>
        <div className="textarea">
          <h3>Observações Tecnicas</h3>
          <InputTextarea rows={10} {...register('obsTecnica')} />
        </div>
      </div>
      <div className="valores-container">
        <div className="valores-titulo">
          <h1>SubTotal:</h1>
          <h1 className="valores">
            {parseFloat(data?.subTotal || '0').toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </h1>
        </div>
        <div className="valores-titulo">
          <h1>Acrescimos:</h1>
          <h1 className="valores">
            {parseFloat(valorAcrescimo || '0').toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </h1>
        </div>
        <div className="valores-titulo">
          <h1>Desconto:</h1>
          <InputNumber
            inputId="stacked-buttons"
            value={data?.vlDesconto}
            onValueChange={(e: InputNumberValueChangeEvent) => e.value}
            showButtons
            mode="currency"
            currency="BRL"
          />
        </div>
        <div className="valores-titulo">
          <h1>Total:</h1>
          <h1 className="valores">{data?.vlTotal}</h1>
        </div>
      </div>
    </>
  );
};
