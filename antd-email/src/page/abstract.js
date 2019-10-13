import { Table, Divider, Tag } from 'antd';
import { Row, Col } from 'antd';

import { List, Avatar } from 'antd';

const data = [
  {
    title: '张三',
  },
  {
    title: '李四',
  },
  {
    title: 'xx1',
  },
  {
    title: 'dz',
  },
];

export default () => {
    const style = {
      width: '400px',
      margin: '30px',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
      border: '1px solid #e8e8e8',
    };

    const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: '我爱中华',
      address: '2018-11-11',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: '庆祝新中国成立70周年',
      address: '2019-10-11',
    },
    {
      key: '3',
      name: '胡彦祖',
      age: '庆祝新中国成立70周年',
      address: '2019-10-11',
    },
    {
      key: '4',
      name: '胡彦祖',
      age: '庆祝新中国成立70周年',
      address: '2019-10-11',
    },
    {
      key: '5',
      name: '胡彦祖',
      age: '庆祝新中国成立70周年',
      address: '2019-10-11',
    },
  ];
  
  const columns = [
    {
      title: '发件人',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '主题',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '时间',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
      <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
    );
  }

  // const dataSource = [
  //   {
  //     key: '1',
  //     name: '胡彦斌',
  //     age: 32,
  //     address: '西湖区湖底公园1号',
  //   },
  //   {
  //     key: '2',
  //     name: '胡彦祖',
  //     age: 42,
  //     address: '西湖区湖底公园1号',
  //   },
  // ];
  
  // const columns = [
  //   {
  //     title: '姓名',
  //     dataIndex: 'name',
  //     key: 'name',
  //   },
  //   {
  //     title: '年龄',
  //     dataIndex: 'age',
  //     key: 'age',
  //   },
  //   {
  //     title: '住址',
  //     dataIndex: 'address',
  //     key: 'address',
  //   },
  // ];
  
  // <Table dataSource={dataSource} columns={columns} />;