const config = Object.freeze({
  siteName: '盘点器',
  serverUrl: process.env.API_HOST,
  uploadUrl: process.env.UPLOAD_HOST,
  version: '0.0.1',
  apiPrefix: '',
  noAuthPages: ['/login', '/forget', '/']
});

export default config;
