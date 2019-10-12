export default {
    plugins: [
        ['umi-plugin-react', {
          antd: true
        }],
    ],

    routes: [{
        path: '/',
        component: './helloworld',
    }],    
};
