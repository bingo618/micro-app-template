import pathToRegexp from 'path-to-regexp';

export function pathMatchRegexp(regex: string, pathname: string) {
  return pathToRegexp(regex).exec(pathname);
}

/**
 * 分页数据格式化
 * @param result 
 */
export function formatTableResult(result: any) {
  const { total = 0, rows = [] } = result?.data;
  return {
    total: total || 0,
    list: rows || [],
  };
}

/**
 * 分页数据格式化
 * @param result 
 */
export function formatProTableResult(result: any) {
  const { total = 0, rows = [] } = result?.data;
  return {
    total: total || 0,
    data: rows || [],
    success: result.errcode === '0'
  };
}

