export default {
    plugins: [
        ['umi-plugin-react', {
          antd: true
        }],
    ],

    routes: [{
        path: '/',
        component: '../layout',
        
        routes: [
            {
                path: '/',
                component: 'abstract',
            },
            {
              path: '/abstract',
              component: 'abstract'
            },
        ]
    }],
};
