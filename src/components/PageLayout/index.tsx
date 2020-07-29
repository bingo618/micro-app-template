import React, { ReactElement, ReactNode, useState } from 'react';
import { Layout } from 'antd';
import PageNav from './PageNav';
import { history, useLocation } from 'umi';
import PageFooter from './PageFooter';
import { IS_MRICO_ENV } from '@/utils';
import styles from './index.less';
import logo from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo2.png';

export interface PageLayoutProps {
  children: ReactElement;
  menus: Array<{ key: string; name: string; icon: ReactNode }>;
}
const PageLayout: React.FC<PageLayoutProps> = ({ children, menus }) => {
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <Layout className={styles.layout}>
      <Layout.Sider
        className="layout__sider"
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(pre => !pre)}
        width={200}
        theme={IS_MRICO_ENV ? 'light' : 'dark'}
      >
        {!IS_MRICO_ENV && (
          <div className="layout__logo">
            <img width={collapsed ? 26 : 120} src={collapsed ? logo2 : logo} />
          </div>
        )}
        <PageNav
          menus={menus}
          pathname={pathname}
          onChange={key => history.push({ pathname: key })}
        />
      </Layout.Sider>
      <Layout
        className="layout__content"
        style={{ paddingLeft: collapsed ? 80 : 200 }}
      >
        <Layout.Content>{children}</Layout.Content>
        <Layout.Footer>
          <PageFooter />
        </Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default React.memo(PageLayout);
