import React, { ReactNode } from 'react';
import { Menu } from 'antd';
import { IS_MRICO_ENV } from '@/utils';

const formatPathName = (pathname: string): string => {
  const pathArrary = pathname.split('/');
  return `/${pathArrary[1]}`;
};

export interface PageNavProps {
  pathname: string;
  menus: Array<{ key: string; name: string; icon: ReactNode }>;
  onChange: (key: string) => void;
}

const PageNav: React.FC<PageNavProps> = ({ pathname, menus, onChange }) => {
  return (
    <Menu
      mode="inline"
      selectedKeys={[formatPathName(pathname)]}
      onClick={(e: any) => {
        onChange(e.key);
      }}
      theme={IS_MRICO_ENV ? 'light' : 'dark'}
      style={{ borderRight: 0 }}
    >
      {menus.map(item => (
        <Menu.Item key={item.key} icon={item.icon} title={item.name}>
          {item.name}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default React.memo(PageNav);
