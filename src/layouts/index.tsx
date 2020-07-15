import React from 'react';
import styles from './index.less';
import { Layout, Menu } from 'antd';
import { history, useModel } from 'umi';
import { AuthService } from 'yocon-lib';

export default function(props: any) {
  const masterProps = useModel('@@qiankunStateFromMaster');
  //AuthService.setToken(masterProps.token);
  return (
    <Layout
      className={styles.layout}
      style={{ width: '100%', minHeight: '100vh' }}
    >
      <Layout.Sider className="site-page-sider" width={220} theme="light">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1">菜单1</Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout className={styles.content}>{props.children}</Layout>
    </Layout>
  );
}
