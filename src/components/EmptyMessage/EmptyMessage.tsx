import React from 'react';
import styles from './EmptyMessage.module.scss';

type EmptyMessageProps = {
  iconClass: string;
  message: string;
};

export const EmptyMessage: React.FC<EmptyMessageProps> = ({ iconClass, message }) => {
  return (
    <div className={styles.emptyMessage}>
      <span className={`${styles.icon} ${iconClass}`}></span>
      <p className={styles.message}>{message}</p>
    </div>
  );
};
