export default {
    plugins: [['umi-plugin-react', {
        antd: true,
        dva: true,
    }]],

    proxy: {
        '/dev': {
          target: 'http://localhost:3005',
          pathRewrite: { '^/dev': '' },
          changeOrigin: true,
        }
    }
};