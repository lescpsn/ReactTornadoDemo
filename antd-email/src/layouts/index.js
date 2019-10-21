import { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import Link from 'umi/link';


const {Header, Sider,Content,Footer } = Layout


const SubMenu = Menu.SubMenu;
class BaseLayout extends Component {
    render() {
        return (
            <Layout>
                    <Sider width={192} style={{color: 'red' ,  minHeight: '96vh' }}>
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


                        </Menu>
                    </Sider>

                    <Layout>
                        <Header style={{background: '#fff', color: 'orange' }}>Header</Header>
                        <Layout>
                            <Sider width={192} style={{color: 'red' }}>{this.props.children}</Sider>
                            {/* <Content>{this.props.children}</Content> */}
                            <Content>邮件正文</Content>
                        </Layout>
                        <Footer style={{background: '#fff', color: 'orange', textAlign: 'center'}}>Footer</Footer>
                    </Layout>
            </Layout>
                


        )
    }
}
export default BaseLayout