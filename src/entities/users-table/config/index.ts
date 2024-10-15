import { ColumnsType } from 'antd/es/table';
import { IUserData } from '@/shared/interfaces';

export const columns: ColumnsType<IUserData> = [
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
