import { Table } from 'antd';
import React from 'react';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },

  {
    title: 'Category',
    dataIndex: 'category',
    
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
  },
];
const data = [
  {
    key: '1',
    name: 'Samarendra',
    category: 'Athenox',
    email: 'samarendragouda@gmail.com',
    phone: '8908586006',
  },
  {
    key: '2',
    name: 'Aman',
    category: 'Athenox',
    email: 'aman@yahoo.com',
    phone: '9304528742',
  },
  {
    key: '3',
    name: 'Devanshu',
    category: 'Apollox',
    email: 'devanshu@gmail.com',
    phone: '9304528742',
  },
  {
    key: '4',
    name: 'Aditya',
    category: 'Apollox',
    email: 'aditya@gmail.com',
    phone: '7894561230',
  },
  {
    key: '5',
    name: 'Samarendra',
    category: 'Apollox',
    email: 'samarendragouda@gmail.com',
    phone: '8908586006',
  },
  {
    key: '6',
    name: 'Aman',
    category: 'Athenox',
    email: 'aman@yahoo.com',
    phone: '9304528742',
  },
  {
    key: '7',
    name: 'Devanshu',
    category: 'Apollox',
    email: 'devanshu@gmail.com',
    phone: '9304528742',
  },
  {
    key: '8',
    name: 'Aditya',
    category: 'Apollox',
    email: 'aditya@gmail.com',
    phone: '7894561230',
  },
  {
    key: '9',
    name: 'Samarendra',
    category: 'Athenox',
    email: 'samarendragouda@gmail.com',
    phone: '8908586006',
  },
  {
    key: '10',
    name: 'Aman',
    category: 'Apollox',
    email: 'aman@yahoo.com',
    phone: '9304528742',
  },
  {
    key: '11',
    name: 'Devanshu',
    category: 'Apollox',
    email: 'devanshu@gmail.com',
    phone: '9304528742',
  },
  {
    key: '12',
    name: 'Aditya',
    category: 'Apollox',
    email: 'aditya@gmail.com',
    phone: '7894561230',
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const App = () => <Table columns={columns} dataSource={data} onChange={onChange} />;

export default App;