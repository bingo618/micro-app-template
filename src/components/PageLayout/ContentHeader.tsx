import React from 'react';
import { PageHeader } from 'antd';
import { PageHeaderProps } from 'antd/lib/page-header';
import { Link, formatMessage, useIntl } from 'umi';
import styles from './index.less';

type RouteLink = '/';
type RouteMapProps = { [key in RouteLink]: string };

const breadcrumbNameMap: RouteMapProps = {
  '/': '菜单一',
};

export interface ContentHeaderProps {
  pathname: string;
  pageHeader?: PageHeaderProps;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({
  pathname,
  pageHeader,
}) => {
  //TO DO 暂时使用Number(i)
  const { formatMessage } = useIntl();
  const pathSnippets = pathname.split('/').filter(i => i && !Number(i));
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}` as RouteLink;
    return {
      path: url,
      breadcrumbName: breadcrumbNameMap[url],
    };
  });

  const breadcrumbItems = [
    {
      path: '../../workbench',
      breadcrumbName: formatMessage({ id: 'layouts.navMenus.workbench' }),
    },
  ].concat(extraBreadcrumbItems);

  const itemRender = (
    route: any,
    params: any,
    routes: any,
    pathname: Array<string>,
  ) => {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={`/${pathname.splice(0, 1).join('/')}`}>
        {route.breadcrumbName}
      </Link>
    );
  };

  return (
    <PageHeader
      ghost={false}
      className={styles.header}
      title={breadcrumbItems[breadcrumbItems.length - 1].breadcrumbName}
      breadcrumb={{
        routes: breadcrumbItems,
        itemRender: itemRender,
      }}
      {...pageHeader}
    />
  );
};

export default React.memo(ContentHeader);
