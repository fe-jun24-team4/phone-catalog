import styles from './buttonPrimary.module.scss';
import classNames from 'classnames';
import React from 'react';
import { FC } from 'react';

export interface Props {
  title: string;
  selected?: boolean;
  onClick?: () => void;
}

const ButtonPrimary: FC<Props> = ({ title, selected, onClick = () => {} }) => {
  return (
    <button
      className={classNames(styles.buttonPrimary, {
        [styles.selected]: selected,
      })}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonPrimary;
