import { Table } from 'antd';
import { IUserData } from '@/shared/interfaces';
import { columns } from '../config';
import { useEffect } from 'react';
import {useGate, useUnit} from "effector-react";
import { $data, $loading, Gate } from '../model';

export function UsersTable() {
  const { data, loading } = useUnit({ data: $data, loading: $loading });
  useGate(Gate);
  
  useEffect(() => {
    console.log('Gate opened');

    return () => {
      console.log('Gate close');
    };
  }, []);

  return (
    <Table<IUserData>
      columns={columns}
      rowKey={(record) => record.login.uuid}
      dataSource={data}
      loading={loading}
      pagination={false}
    />
  );
}

