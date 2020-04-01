import { Component,PureComponent } from 'react'

import { Layout, Menu, Icon } from 'antd'
import Link from 'umi/link';

import { List, Avatar } from 'antd';

const {Header, Sider,Content,Footer } = Layout


const SubMenu = Menu.SubMenu;


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

  
class ContentLayout  extends Component {
    render() {
        console.log("##########tttttttthis.props.children",this.props.children)
        return (
            <Layout>
                <Sider width={384} style={{background: '#999',color: 'red' ,  height: '83vh', overflow: 'auto'}}>{this.props.children[0]}</Sider>
                {/* <Sider width={384} style={{background: '#999',color: 'red' ,  height: '83vh', overflow: 'auto'}}></Sider> */}

                {/* <Content>{this.props.children}</Content> */}
                <Content>{this.props.children[1]}</Content>  
            </Layout>
        
        )
    }
}


class MailList extends PureComponent {
    render () {
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
        )
    }
}

class BaseLayout extends Component {
    render() {
        return (
            <Layout>
                    <Sider width={192} style={{ background: '#faf', color: 'red' ,  height: '100vh',position: 'fixed', overflow: 'auto'}}>
                        <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}>LOGO [软件名称]</div>

                        <Menu  mode="inline">

                            <SubMenu key="sub1" title={<span>123@qq.com</span>}>
                                <Menu.Item key="11"><Link to="/mailbox/inbox">收件箱</Link></Menu.Item>
                                <Menu.Item key="12"><Link to="/mailbox/sentbox">已发送</Link></Menu.Item>
                                <Menu.Item key="13">草稿箱</Menu.Item>
                                <Menu.Item key="14">垃圾箱</Menu.Item>
                                <Menu.Item key="15">回收站</Menu.Item>
                            </SubMenu>

                            <SubMenu key="sub2" title={<span>234@qq.com</span>}>
                                <Menu.Item key="21"><Link to="/mailbox/inbox">收件箱</Link></Menu.Item>
                                <Menu.Item key="22"><Link to="/mailbox/sentbox">已发送</Link></Menu.Item>
                                <Menu.Item key="23">草稿箱</Menu.Item>
                                <Menu.Item key="24">垃圾箱</Menu.Item>
                                <Menu.Item key="25">回收站</Menu.Item>
                            </SubMenu>


                            <SubMenu key="sub3" title={<span>345@qq.com</span>}>
                                <Menu.Item key="31"><Link to="/mailbox/inbox">收件箱</Link></Menu.Item>
                                <Menu.Item key="32"><Link to="/mailbox/sentbox">已发送</Link></Menu.Item>
                                <Menu.Item key="33">草稿箱</Menu.Item>
                                <Menu.Item key="34">垃圾箱</Menu.Item>
                                <Menu.Item key="35">回收站</Menu.Item>
                            </SubMenu>

                            <Menu.Item key="chap03">
                                <Link to="/chap03">
                                    <Icon type="pie-chart" />
                                    <span>第3章</span>
                                </Link>
                            </Menu.Item>                            


                            <Menu.Item key="chap04">
                                <Link to="/list/chap04">
                                    <Icon type="pie-chart" />
                                    <span>第4章</span>
                                </Link>
                            </Menu.Item>  

                        </Menu>
                    </Sider>

                    <Layout style={{ marginLeft: 192 }}>
                        <Header style={{background: '#fff', color: 'orange' }}>Header</Header>
                        <Layout>
                            <Sider width={384} style={{background: '#999',color: 'red' ,  height: '83vh', overflow: 'auto'}}><MailList/></Sider>
                            <Content style={{color: 'red' ,  height: '83vh', overflow: 'auto'}}>{this.props.children}</Content>  
                        </Layout>

                        <Footer style={{background: '#ff9', color: 'orange', textAlign: 'center'}}>Footer</Footer>
                    </Layout>
            </Layout>
                


        )
    }
}
export default BaseLayout