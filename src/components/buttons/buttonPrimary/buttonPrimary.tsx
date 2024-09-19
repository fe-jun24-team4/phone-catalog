import styles from './buttonPrimary.module.scss';
import classNames from 'classnames';

import React from 'react';
import { FC, useState } from 'react';

export interface Props {
  title: string;
  onClick: () => void;
}

const ButtonPrimary: FC<Props> = ({ title, onClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <button
      className={classNames(styles.buttonPrimary, {
        [styles.selected]: isSelected,
      })}
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
    >
      {title}
    </button>
  );
};

export default ButtonPrimary;
