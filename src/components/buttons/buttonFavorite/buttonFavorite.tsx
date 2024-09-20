import styles from './buttonFavorite.module.scss';
import classNames from 'classnames';
import React from 'react';

import { FC } from 'react';

export interface Props {
  icon?: string;
  selected?: boolean;
  onClick?: () => void;
}

const ButtonFavorite: FC<Props> = ({ icon = 'icon-heart', selected, onClick = () => {} }) => {
  return (
    <button
      className={classNames(styles.buttonFavorite, {
        [styles.selected]: selected,
      })}
      onClick={onClick}
    >
      <span className={icon}></span>
    </button>
  );
};

export default ButtonFavorite;
