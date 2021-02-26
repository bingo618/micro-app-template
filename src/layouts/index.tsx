import React from 'react';
import { useModel, formatMessage } from 'umi';
import {
  BarChartOutlined,
  TableOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';
import { PageLayout } from 'yocon-lib';
const navMenus = [
  {
    key: '/',
    name: '菜单一',
    icon: <BarChartOutlined />,
  },
];

function Layout(props: any) {
  const masterProps = useModel('@@qiankunStateFromMaster');
  //console.log(masterProps);
  // AuthService.setToken(masterProps?.globalState?.token || '');
  //setLocale('zh-CN');
  return (
    <PageLayout navPorps={{ menus: navMenus }} breadcrumbs={{}}>
      {props.children}
    </PageLayout>
  );
}

export default Layout;
