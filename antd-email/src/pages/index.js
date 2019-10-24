import React, {PureComponent} from 'react'
import Redirect from 'umi/redirect'

import { List, Avatar } from 'antd';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },

  {
    title: 'Ant Design Title 5',
  },
  {
    title: 'Ant Design Title 6',
  },
  {
    title: 'Ant Design Title 7',
  },
  {
    title: 'Ant Design Title 8',
  },
  {
    title: 'Ant Design Title 9',
  },
  {
    title: 'Ant Design Title 10',
  },
  {
    title: 'Ant Design Title 11',
  },
  {
    title: 'Ant Design Title 12',
  },    
];

class Index2 extends PureComponent {
    render () {
        console.log("**************t101:")
        // return <Redirect to={'/helloworld'} />
        return (

            <div>
                <span>邮件正文</span>
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
            </div>


        )
    }
}


export default Index2