import styles from './buttonFavorite.module.scss';
import classNames from 'classnames';
import React from 'react';

import { FC, useState } from 'react';

export interface Props {
  icon: string;
}

const ButtonFavorite: FC<Props> = ({ icon }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <button
      className={classNames(styles.buttonFavorite, {
        [styles.selected]: isSelected,
      })}
      onClick={() => setIsSelected(true)}
    >
      <span className={icon}></span>
    </button>
  );
};

export default ButtonFavorite;
