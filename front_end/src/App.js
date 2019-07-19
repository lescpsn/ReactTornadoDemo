import React from 'react';
import './App.css';
import { Button, Radio, Icon} from 'antd';




class ButtonSize extends React.Component {
  state = {
    size : 'large'
  }

  handleSizeChange = e=>{
    this.setState({
      size : e.target.value
    });
  }

  render() {
    const {size} = this.state

    return (
      <div>
        <div>
          <Radio.Group value='' onChange={this.handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
        </div>

        <br/>
        <div>
          <Button type="primary" size={size}>primary</Button>
          <Button type="default" size={size}>normal</Button>
          <Button type="dashed" size={size}>dashed</Button>
          <Button type="danger" size={size}>danger</Button>
          <Button type="link" size={size}>link</Button>
          <br/>

          <Button type="primary" shape="circle" icon="download" size={size}></Button>
          <Button type="primary" shape="round" icon="download" size={size}>download</Button>
          <Button type="primary" icon="download" size={size}>download</Button>
          <br/>

          <Button.Group>
            <Button type='primary' size={size}>
              <Icon type="left"/>
              Backward
            </Button>


            <Button type='primary' size={size}>
              <Icon type="right"/>
              Forward
            </Button>
          </Button.Group>



        </div>

      </div>
    )
  }
}

const ButtonGroup = Button.Group

class App extends React.Component {
  state = {
    loading : false,
    iconloading : false
  }

  enterLoading = () => {
    this.setState({
      loading : true
    })
  }

  enterIconLoading = () => {
    this.setState({
      iconloading : true
    })
  }

  render(){
    return (
      <div>
        <div>
          <Button type="primary">primary</Button>
          <Button type="default">default</Button>
          <Button type="dashed">dashed</Button>
          <Button type="danger">danger</Button>
          <Button type="link">link</Button>
          <Button type="primary">primary</Button>
        </div>
        <br/>


        <div>
          <Button type="primary" loading>loading</Button>
          <Button type="primary" size="small" loading>loading</Button>
          <br/>

          <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>Click me!</Button>
          <Button 
            type="primary" 
            icon="poweroff" 
            loading={this.state.iconloading}
            onClick={this.enterIconLoading}>
          Click me!
          </Button>
          <br/>

          <Button shape="circle" loading></Button>
          <Button type="primary" shape="circle" loading></Button>

          <br/>          

        </div>
        <br/>

        <div>
          <h4>Basice</h4>
          <ButtonGroup>
            <Button>Cancel</Button>
            <Button>OK</Button>
          </ButtonGroup>


          <ButtonGroup>
            <Button disabled>L</Button>
            <Button disabled>M</Button>
            <Button disabled>R</Button>                    
          </ButtonGroup>


          <ButtonGroup>
            <Button >L</Button>
            <Button >M</Button>
            <Button >R</Button>                    
          </ButtonGroup>

          <h4>Wich Icon</h4>
          <ButtonGroup>
            <Button >
              <Icon type="left" />
              Go back
            </Button>

            <Button >
              Go forword
              <Icon type="right" />
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button icon ="cloud" />
            <Button icon ="cloud-download" />
          </ButtonGroup>
        </div>
        <br/>

        <div>
          <Button type="primary" block>primary</Button>
          <Button type="danger" block>danger</Button>
          <Button type="default" block>default</Button>
          <Button type="dashed" block>dashed</Button>
          <Button type="link" block>link</Button>          
        </div>
        <br/>
        <div>
          <Button type="primary" shape="circle" icon="search"></Button>
          <Button type="primary" icon="search">Search</Button>
          <Button shape="circle" icon="search"></Button>      
          <Button icon="search">Search</Button>              
          <br/>
          <Button shape="circle" icon="search"></Button>      
          <Button icon="search">Search</Button>              
          <Button type="dashed" shape="circle" icon="search"></Button>
          <Button type="dashed" icon="search">Search</Button>
        </div>
        <br/>
        <div>
          <Button type="primary">primary</Button>
          <Button type="primary" disabled>primary disabled</Button>
          <br/>
          <Button type="default">default</Button>
          <Button type="default" disabled>default disabled</Button>
          <br/>
          <Button type="dashed">dashed</Button>
          <Button type="dashed" disabled>dashed disabled</Button>
          
          <br/>
          <Button type="link">link</Button>
          <Button type="link" disabled>link disabled</Button>

          <br/>
          <div style={{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }}>
            <Button ghost>Ghost</Button>
            <Button ghost disabled>
              Ghost(disabled)
            </Button>
          </div>


        </div>

        <div>
          <ButtonSize />
        </div>

      </div>
    );
  }
}


export default App;
