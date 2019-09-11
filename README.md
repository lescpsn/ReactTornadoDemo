# ReactTornadoDemo
## 工程结构概览
> antd-demo  用create-react-app构建的前端工程  
> front_end  
> back_end  后端工程

## 搭建后端工程
> 创建后端工程目录 back_end  


## 搭建前端工程

### 方法一 create-react-app 构建前端工程antd-demo
1. 安装 node  
    > 设置npm的镜像源  
    > npm config set registry http://registry.npm.taobao.org/  

2. 安装 create-react-app  
    > npm install -g create-react-app  

3. 构建前端工程 antd-demo  
    > create-react-app antd-demo  
    > 或者  
    > yarn create react-app antd-demo
    > 如果是windows平台，msys2终端中调用可能有问题，直接在cmd中执行  
    >

4. 引入antd
    > npm install antd --save  
    > 或者   
    > yarn add antd

5. 自定义配置
    5.1 安装 react-app-rewired customize-cra  
    > yarn add react-app-rewired customize-cra  

    5.2 修改 package.json  
    > -   "start": "react-scripts start",  
    > +   "start": "react-app-rewired start",  
    > -   "build": "react-scripts build",  
    > +   "build": "react-app-rewired build",  
    > -   "test": "react-scripts test",  
    > +   "test": "react-app-rewired test",    

    5.3 新建 config-overrides.js 

    5.4 安装 yarn add babel-plugin-import
    > yarn add yarn add babel-plugin-import  


    5.5 自定义主题
    > yarn add less less-loader
    > 修改config-overrides.js文件




### 方法二umi构建工程
1. mkdir front_end

2. 创建umi
    > yarn create umi  
    > 或者  
    > npm create umi  
    > 选择 app -> typescript(N) -> antd & dva

3. 安装依赖  
    > yarn  
    > 或者  
    > npm install  

4. 全局安装npx
    >  yarn global add npx  

5. 创建页面路由  
    > npx umi g page products  








