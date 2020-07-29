import React, { ReactElement } from 'react';
import ContentHeader from './ContentHeader';
import { PageHeaderProps } from 'antd/lib/page-header';
import { useLocation } from 'umi';
import { Spin } from 'antd';

export interface PageContainerProps {
  children: ReactElement;
  loading?: boolean;
  pageHeader?: PageHeaderProps | any;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  loading = false,
  pageHeader,
}) => {
  const { pathname } = useLocation();
  return (
    <>
      <ContentHeader pathname={pathname} pageHeader={pageHeader} />
      <div style={{ padding: 16 }}>
        <Spin spinning={loading} size="large">
          {children}
        </Spin>
      </div>
    </>
  );
};

export default React.memo(PageContainer);
