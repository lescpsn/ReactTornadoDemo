import { Tabs, Tree} from 'antd'; 


const TabPane = Tabs.TabPane;
const TreeNode = Tree.TreeNode

const MyInput = ( { value = 'a',onChange} ) => (
    <input value={value} onChange = {onChange} />
);

class Demo extends React.Component {
    state = {
        text: 'a',
        activeKey: '1',
        expandedKeys: [],
    }

// 接收原本的展开事件，在 state 中记录 expandedKeys
onExpand = (expandedKeys) => {
    this.setState({ expandedKeys });
  }
  
  // 接收选中事件，修改 expandedKeys
  onSelect = (selectedKeys) => {
    const { expandedKeys } = this.state;
    const key = selectedKeys[0];
  
    if (expandedKeys.includes(key)) {
      // 移除 key
      this.setState({
        expandedKeys: expandedKeys.filter(k => k !== key),
      });
    } else {
      // 添加 key
      this.setState({ expandedKeys: [...expandedKeys, key] });
    }
  }

  

    onTextChange = (event) => {
        console.log(event.target.value);
        this.setState({text:event.target.value})
    }

    onTextReset = () => {
        console.log("*****");
        this.setState({ text: '' });
    }
  

    onTabChange = (activeKey) => {
        this.setState({ activeKey });
    }

    render() {
      return (
        <div>
            <MyInput value={this.state.text} onChange={this.onTextChange} />
            <button onClick={this.onTextReset}>Reset</button>

            <Tabs>
                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            </Tabs>


            <Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>
                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            </Tabs>

            <Tree
  expandedKeys={this.state.expandedKeys}
  selectedKeys={[]}
  onExpand={this.onExpand}
  onSelect={this.onSelect}            
            >
                <Tree.TreeNode title="parent 1" key="0-0">
                    <Tree.TreeNode title="leaf" key="0-0-0" />
                    <Tree.TreeNode title="leaf" key="0-0-1" />
                </Tree.TreeNode>
            </Tree>

        </div>        
      );
    }
  }

export default Demo

