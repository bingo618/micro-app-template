import { request, AuthService } from 'yocon-lib';
import { RequestOptionsInit } from 'umi-request';
import { cloneDeep, isEmpty } from 'lodash';
import pathToRegexp from 'path-to-regexp';
import qs from 'qs';
import config from './config';
import { history, getLocale } from 'umi';
import { message, notification } from 'antd';

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
    url:
      method.toLocaleLowerCase() === 'get'
        ? `${url}${isEmpty(cloneData) ? '' : '?'}${qs.stringify(cloneData)}`
        : url,
    options: {
      ...options,
      headers: {
        'auth-header': AuthService.getToken(),
        'Accept-Language': getLocale(),
      },
    },
  };
};

interface errorProps {
  errcode: string;
  errmsg: string;
}

const handleInsideError = (error: errorProps) => {
  if (error.errcode === '1003') {
    history.replace({
      pathname: '/../../login',
    });
  }
  message.error(error.errmsg);
};

/**
 * 异常处理程序
 */
const errorHandler = (error: any) => {
  const { response } = error;
  if (response) {
    const status: keys = response.status;
    const errortext = codeMessage[status] || response.statusText;
    notification.error({
      message: `请求错误 ${status}`,
      description: errortext,
    });
  } else {
    if (error?.errcode) {
      handleInsideError(error);
    } else {
      // notification.error({
      //   message: `网络错误`,
      //   description: '您的网络发生异常，无法连接服务器',
      // });
      history.replace({
        pathname: '/503',
      });
    }
    return Promise.reject(error);
  }
};

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

type keys = 200 | 201 | 202 | 400 | 401;

request.extendOptions({
  prefix: config.serverUrl,
  errorHandler,
});

request.interceptors.request.use((url, options) =>
  requestInterceptors(url, options),
);

// 克隆响应对象做解析处理
request.interceptors.response.use(async response => {
  const req = await response.clone().json();
  const { errcode, errmsg } = req;
  if (errcode && errcode !== '0') {
    return Promise.reject({ errcode, errmsg, success: false });
  }
  return response;
});
