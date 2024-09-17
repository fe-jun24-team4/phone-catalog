import { FC, useState } from 'react';
import styles from './buttonPrimary.module.scss';
import classNames from 'classnames';
import React from 'react';

export interface Props {
  title: string;
}

const ButtonPrimary: FC<Props> = ({ title }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <button
      className={classNames(styles.buttonPrimary, {
        [styles.selected]: isSelected,
      })}
      onClick={() => setIsSelected(true)}
    >
      {title}
    </button>
  );
};

export default ButtonPrimary;
