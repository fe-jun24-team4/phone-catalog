import React from 'react';
import styles from './TitleWithSubscript.module.scss';

type Props = {
  title: string;
  subscript: string;
};

export const TitleWithSubscript = ({ title, subscript }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>{title}</h1>
      <p className={styles.subscript}>{subscript}</p>
    </div>
  );
};
