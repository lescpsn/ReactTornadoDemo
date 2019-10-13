// 注意这里我们除了从antd中引入了Layout布局组件，还引入了Menu菜单组件，Icon图标组件

import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';

import { Button } from 'antd';
// import { Layout, Menu, Icon } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu; 


// #components-layout-demo-custom-trigger .trigger {
//     font-size: 18px;
//     line-height: 64px;
//     padding: 0 24px;
//     cursor: pointer;
//     transition: color 0.3s;
//   }

export default class BasicLayout extends Component {
    state = {
        collapsed: false,
      };
      
      
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
      
      
  render() {
    return (
      <Layout>
        <Sider width={200} style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,}} >

          {/* <div className="logo" style={{ height: '122px', background: 'rgba(234,0,0,.2)', margin: '10px'}}/> */}
          <div className="logo" style={{ height: '50px', background: 'rgba(255,255,0,.9)', margin: '10px'}}>我的邮件</div>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>123456@qq.com</span></span>}
            >
               <Menu.Item key="11">收件箱</Menu.Item>
               <Menu.Item key="12">草稿箱</Menu.Item>
               <Menu.Item key="13">垃圾箱</Menu.Item>
               <Menu.Item key="14">已发送</Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub2"
              title={<span><Icon type="user" /><span>234567@qq.com</span></span>}
            >
               <Menu.Item key="21">收件箱</Menu.Item>
               <Menu.Item key="22">草稿箱</Menu.Item>
               <Menu.Item key="23">垃圾箱</Menu.Item>
               <Menu.Item key="24">已发送</Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub3"
              title={<span><Icon type="user" /><span>345678@qq.com</span></span>}
            >
               <Menu.Item key="31">收件箱</Menu.Item>
               <Menu.Item key="32">草稿箱</Menu.Item>
               <Menu.Item key="33">垃圾箱</Menu.Item>
               <Menu.Item key="34">已发送</Menu.Item>
            </SubMenu>


            <SubMenu
              key="sub4"
              title={<span><Icon type="user" /><span>456789@qq.com</span></span>}
            >
               <Menu.Item key="41">收件箱</Menu.Item>
               <Menu.Item key="42">草稿箱</Menu.Item>
               <Menu.Item key="43">垃圾箱</Menu.Item>
               <Menu.Item key="44">已发送</Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub5"
              title={<span><Icon type="user" /><span>567890@qq.com</span></span>}
            >
               <Menu.Item key="51">收件箱</Menu.Item>
               <Menu.Item key="52">草稿箱</Menu.Item>
               <Menu.Item key="53">垃圾箱</Menu.Item>
               <Menu.Item key="54">已发送</Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff',  padding: 0}}>
          <div>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            
                <Button type="primary">收邮件</Button>
                <Button>写邮件</Button>
                <Button type="dashed">回复</Button>
                <Button type="danger">转发</Button>
            </div>
        
          </Header>
          <Content  style={{ background: '#aaa', margin: '8px 8px 0',height: '76vh' }}>
            <Layout >
                <Sider width={400} > 
                    <div style={{ padding: 2, background: '#fff'}}>
                        {this.props.children}
                    </div>
                </Sider>

                <Content style={{ margin: '0px 1px 0'}}>
                <div style={{ padding: 16, background: '#fff'}}>
                    {/* {this.props.children} */}
                    邮件正文
                </div>
                </Content>                
            </Layout>
          </Content>
          <Footer style={{ background: '#fff',textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )
  }
}