import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@/components/Loading',
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
    '@primary-color': '#008fd7',
  },
  chainWebpack(config) {
    config.plugin('moment2dayjs').use('antd-dayjs-webpack-plugin');
  },
  define: {
    'process.env.API_HOST': 'http://121.196.9.87:3000/mock/11',
    'process.env.UPLOAD_HOST': 'http://192.168.3.200:8562/file/upload',
  },
});
