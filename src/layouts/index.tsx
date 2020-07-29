import React from 'react';
import { useModel, formatMessage } from 'umi';
import PageLayout from '@/components/PageLayout';
import {
  BarChartOutlined,
  TableOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';
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
  return <PageLayout menus={navMenus}>{props.children}</PageLayout>;
}

export default Layout;
