import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';


const { Header, Footer, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {
    render() {
        return (
          <Layout>
            {/* <Sider>Sider</Sider> */}


                <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>

            <Layout >
            <Sider width={256} style={{ minHeight: '100vh' }}>
              <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                <Menu.Item key="1">
                    <Link to="/puzzlecardsq">
                      {/* <Icon type="pie-chart" /> */}
                      <span>puzzlecards</span>
                    </Link>
                </Menu.Item>


                <Menu.Item key="2">
                    <Link to="/helloword">
                      <Icon type="pie-chart" />
                      <span>Helloword</span>
                    </Link>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
                >
                   <Menu.Item key="2"><Link to="/dashboard/analysis">分析页</Link></Menu.Item>
                   <Menu.Item key="3"><Link to="/dashboard/monitor">监控页</Link></Menu.Item>
                   <Menu.Item key="4"><Link to="/dashboard/workplace">工作台</Link></Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>

            <Layout >
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 650 }}>
                    {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
            </Layout>
   </Layout>
        )
      }    
}

export default BasicLayout;
