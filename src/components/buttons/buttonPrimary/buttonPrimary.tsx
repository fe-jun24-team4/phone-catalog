import styles from './buttonPrimary.module.scss';
import classNames from 'classnames';
import React from 'react';
import { FC } from 'react';

export interface Props {
  children: string;
  title: string;
  selected?: boolean;
  onClick?: () => void;
}

const ButtonPrimary: FC<Props> = ({ children, title, selected, onClick = () => {} }) => {
  return (
    <button
      className={classNames(styles.buttonPrimary, {
        [styles.selected]: selected,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
