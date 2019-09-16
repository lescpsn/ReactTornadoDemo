import React, {Component} from 'react'
// import Button from 'antd/es/button'
import { Button } from 'antd';
import { Row, Col } from 'antd';

import { Layout, Menu, Breadcrumb} from 'antd';
import { Icon } from 'antd';


import './App.css'

const { Header, Footer, Sider, Content } = Layout;





const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

class App extends Component {

  state = {
    collapsed: false,
  };


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return(
      <div>
        <div>
          <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
          </Row>

          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>

          <Row>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
          </Row>
        </div>

        <div>
          <Button type="primary">Button</Button>
        </div>

        <div className="gutter-example">
          <Row gutter={32}>
            <Col span={6}>
              <div className="gutter-box">col-6</div>
            </Col>

            <Col span={6}>
              <div className="gutter-box">col-6</div>
            </Col>

            <Col span={6}>
              <div className="gutter-box">col-6</div>
            </Col>

            <Col span={6}>
              <div className="gutter-box">col-6</div>
            </Col>
          </Row>
        </div>

        <div>
          <Button type="primary">Button</Button>
        </div>

        <div className="gutter-example">
          <Row>
            <Col span={8}>
              <div className="gutter-box">col-8</div>
            </Col>

            <Col span={8} offset={8}>
              <div className="gutter-box">col-8</div>
            </Col>
          </Row>

          <Row>
            <Col span={6} offset={6}>
              <div className="gutter-box">col-6 col-offset-6</div>
            </Col>
            <Col span={6} offset={6}>
              <div className="gutter-box">col-6 col-offset-6</div>
            </Col>
          </Row>

          <Button type="primary">Button</Button>
          <Row>
            <Col span={12} offset={6}>
              <div className="gutter-box">col-12 col-offset-6</div>
            </Col>
          </Row>

          <Button type="primary">Button</Button>
          <Row>
            <Col span={18} push={6}>
              <div className="gutter-box">col-18 col-push-6</div>
            </Col>
            <Col span={6} pull={18}>
              <div className="gutter-box">col-6 col-pull-18</div>
            </Col>
          </Row>

        </div>

        <div>
          <Button type="primary">Button</Button>
        </div>

        <div>
          <p>sub-element align left</p>
          <Row type="flex" justify="start">
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
          </Row>
        </div>


        <div>
          <p>sub-element align center</p>
          <Row type="flex" justify="center">
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
          </Row>
        </div>

        <div>
          <p>sub-element align right</p>
          <Row type="flex" justify="end">
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
          </Row>
        </div>


        <div>
          <p>sub-element monospaced arrangement</p>
          <Row type="flex" justify="space-between">
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
          </Row>
        </div>


        <div>
          <p>sub-element monospaced arrangement</p>
          <Row type="flex" justify="space-around">
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
            <Col span={4} >
              <div className="gutter-box">col-4</div>
            </Col>
          </Row>
        </div>

        <div>
          <Button type="primary">Button</Button>
        </div>


        

        <div>
          <Row type="flex" justify="center" align="top">
            <Col span={4}>
              <DemoBox value={100}>col-4</DemoBox>
            </Col>
      `      <Col span={4}>
              <DemoBox value={50}>col-4</DemoBox>
            </Col>
            <Col span={4}>
              <DemoBox value={120}>col-4</DemoBox>
            </Col>
            <Col span={4}>
              <DemoBox value={80}>col-4</DemoBox>
            </Col>
          </Row>
        </div>



          <div>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>

          <Layout>
            <Header>Header</Header>
            <Layout>
              <Sider>Sider</Sider>
              <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>

          <Layout>
            <Header>Header</Header>
            <Layout>
              <Content>Content</Content>
              <Sider>Sider</Sider>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>

          <Layout>
            <Sider>Sider</Sider>
            <Layout>
              <Header>Header</Header>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
      </div>




          <div>
            <Button type="primary">Button</Button>
          </div>

          <div>
              <Layout className="layout">
              <Header>
                <div className="logo" />
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['2']}
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="1">nav 1</Menu.Item>
                  <Menu.Item key="2">nav 2</Menu.Item>
                  <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
              </Header>
              <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </div>



          <div>
          <Button type="primary">Button</Button>
          </div>


          <div>
          <Layout>
            <Header className="header">
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>

            </Header>
          </Layout>

          </div>

          <div>
            <Button type="primary">Button</Button>
          </div>


          <div>
            <Button type="primary">Button</Button>
          </div>



          <div>
          <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>

          </div>

      </div>

    )
  }
}



export default App;
// export default Grid;
