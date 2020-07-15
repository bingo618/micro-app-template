import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@/components/Loading',
  },
  locale: {
    antd: true,
  },
  qiankun: {
    slave: {},
  },
  theme: {
    '@primary-color': '#004fb8',
  },
  define: {
    'process.env.API_HOST': 'http://121.196.9.87/',
    'process.env.UPLOAD_HOST': 'http://192.168.3.200:8562/file/upload',
  },
});
