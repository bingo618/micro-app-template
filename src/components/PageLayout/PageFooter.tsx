import config from '@/config';
import React from 'react';
import styles from './index.less';
export default function() {
  return (
    <footer className={styles.footer}>
      <img width={20} src={config.assetsUrl + '/images/tag02.png'} alt="" />
      <a target="_blank" href="https://beian.miit.gov.cn">
        浙ICP备20025959号-1
      </a>
    </footer>
  );
}
