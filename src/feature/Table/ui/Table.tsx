import { Table } from 'antd';
import { DataType } from '@/types';
import { columns } from '../config/column';
import { useEffect } from 'react';
import { fetchUsers } from '@/api';
import {createEvent, createStore} from "effector";
import {useUnit} from "effector-react";

const addData = createEvent<DataType[]>();
const loadData = createEvent<boolean>();

const $data = createStore<DataType[]>([])
  .on(addData, (_, newData) => newData);

const $loading = createStore(false)
  .on(loadData, (_, isLoading) => isLoading);

$loading.watch(loading => {
  if (loading) {
    fetchUsers({results: 10, page: 1})
      .then(data => {
        addData(data.results);
      })
      .finally(() => loadData(false));
  }
});

export function UsersTable() {
  const data = useUnit($data);
  const loading = useUnit($loading);

  useEffect(() => {
    loadData(true);
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

