import { Table } from 'antd';
import { DataType } from '@/types';
import { columns } from '../config/column';
import { useEffect } from 'react';
import {createEvent, createStore, sample} from "effector";
import {createGate, useGate, useUnit} from "effector-react";
import {fetchUsersFx} from "@/feature/Table/ui/helpers.ts";

const Gate = createGate();

const addData = createEvent<DataType[]>();
const loadData = createEvent<boolean>();

const $data = createStore<DataType[]>([])
  .on(addData, (_, newData) => newData)
  .on(fetchUsersFx.doneData, (_, data) => data);

const $loading = createStore(false)
  .on(loadData, (_, isLoading) => isLoading)
  .on(fetchUsersFx.finally, () => false);

sample({ clock: Gate.open, target: fetchUsersFx, fn: () => ({ results: 10, page: 1 }) });
sample({ clock: Gate.close, target: loadData.prepend(() => false) });

export function UsersTable() {
  useGate(Gate);
  const { data, loading } = useUnit({ data: $data, loading: $loading });

  useEffect(() => {
    console.log('Gate opened');

    return () => {
      console.log('Gate close');
    };
  }, []);

  return (
    <Table<DataType>
      columns={columns}
      rowKey={(record) => record.login.uuid}
      dataSource={data}
      loading={loading}
      pagination={false}
    />
  );
}

