import { Table } from 'antd';
import { DataType } from '@/types';
import { columns } from '../config/column';
import { useEffect, useState } from 'react';
import { fetchUsers } from '@/api';

export function UsersTable() {
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);


  const fetchData = () => {
    setLoading(true);

    const result = fetchUsers({
      results: 10,
      page: 1,
    });

    result.then( (data) => {
      setData(() => {
        return data.results
      });
    }).finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
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

