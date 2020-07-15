import { request } from 'yocon-lib'
import config from '@/config';
import { endsWith } from 'lodash';
import api from '@/services/api';

export const gen = (params: string) => {
  let url = config.apiPrefix + params;
  let method = 'GET';

  const paramsArray = params.split(' ');
  if (paramsArray.length === 2) {
    method = paramsArray[0];
    const mi = method.indexOf('?');
    if (mi !== -1) {
      if (endsWith(method, '?')) {
        method = method.substring(0, method.length - 1);
        url = paramsArray[1];
      } else {
        method = method.substr(1, method.length);
        url = config.apiPrefix + paramsArray[1];
      }
    } else {
      url = paramsArray[1];
    }
  }

  return function (data: any) {
    return request(url, { method, data })
  };
};

const ApiFunc: any = {};
for (const key in api) {
  ApiFunc[key] = gen(api[key]);
}

export default ApiFunc;
