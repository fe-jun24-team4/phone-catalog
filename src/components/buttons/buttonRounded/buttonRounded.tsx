import styles from './buttonRounded.module.scss';
import classNames from 'classnames';
import { FC, useState } from 'react';
import { Direction } from '../../../enums/Direction';

type Degrees = number;

function getRotationDegrees(value: Degrees | Direction) {
  if (typeof value === 'number') {
    return value;
  } else {
    switch (value as Direction) {
      case Direction.up:
        return 90;
      case Direction.down:
        return -90;
      case Direction.right:
        return 180;
      case Direction.left:
        return 0;
    }
  }
}

export interface Props {
  title?: string;
  icon?: string;
  rotate?: Degrees | Direction;
}

const ButtonRounded: FC<Props> = ({ title, icon, rotate }) => {
  const [isSelected, setIsSelected] = useState(false);

  const rotationDegrees = getRotationDegrees(rotate ?? 0);

  return (
    <button
      className={classNames(styles.buttonRounded, {
        [styles.selected]: isSelected,
      })}
      onClick={() => setIsSelected(true)}
    >
      {title ? (
        `${title}`
      ) : (
        <span className={icon} style={{ transform: `rotate(${rotationDegrees}deg)` }}></span>
      )}
    </button>
  );
};

export default ButtonRounded;
