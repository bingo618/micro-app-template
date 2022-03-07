import React, { useState } from 'react';
import { BarChartOutlined } from '@ant-design/icons';
import { AuthService, PageLayout, LoginModal } from 'yocon-lib';
import { useLocation, history } from 'umi';
import { message } from 'antd';
import { IS_MRICO_ENV } from '@/utils';
const navMenus = [
  {
    key: '/',
    name: '菜单一',
    icon: <BarChartOutlined />,
  },
];

function Layout(props: any) {
  // AuthService.setToken(masterProps?.globalState?.token || '');
  const [loginVisble, setLoginVisble] = useState(true);
  message.config({
    maxCount: 1,
  });

  if (
    !IS_MRICO_ENV &&
    process.env.NODE_ENV == 'development' &&
    !AuthService.isLogin()
  ) {
    return (
      <LoginModal
        visible={loginVisble}
        onCancel={() => setLoginVisble(false)}
        onSuccess={() => {
          setLoginVisble(false);
          history.replace({ pathname: '/' });
        }}
      />
    );
  }
  return (
    <PageLayout navPorps={{ menus: navMenus }} breadcrumbs={{}}>
      {props.children}
    </PageLayout>
  );
}

export default Layout;
