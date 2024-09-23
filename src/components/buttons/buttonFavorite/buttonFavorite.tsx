import styles from './buttonFavorite.module.scss';
import classNames from 'classnames';
import React from 'react';

import { FC } from 'react';

export interface Props {
  selected?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonFavorite: FC<Props> = ({ selected, onClick = () => {} }) => {
  return (
    <button
      className={classNames(styles.buttonFavorite, {
        [styles.selected]: selected,
      })}
      onClick={onClick}
    >
      <span className={selected ? 'icon-heart-filled' : 'icon-heart'} />
    </button>
  );
};

export default ButtonFavorite;
