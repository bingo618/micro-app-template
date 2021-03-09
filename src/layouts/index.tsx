import React from 'react';
import { BarChartOutlined } from '@ant-design/icons';
import { PageLayout } from 'yocon-lib';
const navMenus = [
  {
    key: '/',
    name: '菜单一',
    icon: <BarChartOutlined />,
  },
];

function Layout(props: any) {
  // AuthService.setToken(masterProps?.globalState?.token || '');
  return (
    <PageLayout navPorps={{ menus: navMenus }} breadcrumbs={{}}>
      {props.children}
    </PageLayout>
  );
}

export default Layout;
