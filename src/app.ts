import { request } from 'yocon-lib';
import config from './config';
request.extendOptions({
  prefix: config.serverUrl,
});
