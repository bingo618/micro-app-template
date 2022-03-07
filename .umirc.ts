import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@/components/Loading',
  },
  antd: {
    config: {
      prefixCls: 'test',
    },
  },
  hash: true,
  ignoreMomentLocale: true,
  locale: {
    default: 'zh-CN',
    antd: true,
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false,
      },
      'lodash',
    ],
  ],
  qiankun: {
    slave: {},
  },
  theme: {
    '@primary-color': '#4c64fe',
    '@ant-prefix': 'test',
  },
  chainWebpack(config) {
    config.plugin('moment2dayjs').use('antd-dayjs-webpack-plugin');
  },
  define: {
    'process.env.API_HOST': 'http://121.196.9.87:3000/mock/11',
    'process.env.UPLOAD_HOST': 'http://192.168.3.200:8562/file/upload',
  },
});
