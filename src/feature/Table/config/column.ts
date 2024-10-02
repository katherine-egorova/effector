import { ColumnsType } from 'antd/es/table';
import { DataType } from '@/types';

export const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (name) => `${name.first} ${name.last}`,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
];
