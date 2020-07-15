import { request, AuthService } from 'yocon-lib';
import { RequestOptionsInit } from 'umi-request';
import { cloneDeep, isEmpty } from 'lodash';
import pathToRegexp from 'path-to-regexp';
import qs from 'qs';
import config from './config';

/**
 * 添加请求头
 * @param url 
 * @param options 
 */
const requestInterceptors = (url: string, options: RequestOptionsInit) => {
  let { data, method = 'GET' } = options;
  const cloneData = cloneDeep(data);
  try {
    let domain = '';
    const urlMatch = url.match(/[a-zA-z]+:\/\/[^/]*/);
    if (urlMatch) {
      [domain] = urlMatch;
      url = url.slice(domain.length);
    }

    const match = pathToRegexp.parse(url);
    url = pathToRegexp.compile(url)(data);

    for (const item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name];
      }
    }

    url = domain + url;
  } catch (e) {
    throw new Error(e);
  }
  return {
    url: method.toLocaleLowerCase() === 'get'
      ? `${url}${isEmpty(cloneData) ? '' : '?'}${qs.stringify(cloneData)}`
      : url,
    options: {
      ...options,
      headers: {
        'auth-header': AuthService.getToken()
      }
    }
  }
}

request.extendOptions({
  prefix: config.serverUrl,
})

request.interceptors.request.use((url, options) => requestInterceptors(url, options));
