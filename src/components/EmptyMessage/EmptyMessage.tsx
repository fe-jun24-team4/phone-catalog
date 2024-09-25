import React from 'react';
import styles from './EmptyMessage.module.scss';

type EmptyMessageProps = {
  iconClass: string;
  message: string;
};

export const EmptyMessage: React.FC<EmptyMessageProps> = ({ iconClass, message }) => {
  return (
    <div className={styles.emptyMessage}>
      <i className={`${styles.icon} ${iconClass}`}></i>
      <p>{message}</p>
    </div>
  );
};
