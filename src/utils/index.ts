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

/**
 * 显示人员-角色
 * @param post 
 */
export function formatOrgRole(post: any[] = []) {
  return post.map(item => {
    const roleName = item.role?.name;
    const deptName = item.dept?.name;
    return roleName ? `${deptName}-${roleName}` : deptName;
  });
}

/**
 * 显示人员-角色
 * @param post 
 */
export function formatResponseData(errcode: string, data: any) {
  if (errcode === '0') {
    return data ? data : 1
  } else {
    return data ? data : 0
  }
}

export function formatOrgType(type: number | string) {
  switch (Number(type)) {
    case 1:
      return '校区';
    case 2:
      return '学院';
    case 3:
      return '系';
    case 4:
      return '所';
    case 5:
      return '实验室';
    case 6:
      return '仓库';
    case 7:
      return '课题组';
    default:
      return '单位'
  }
}