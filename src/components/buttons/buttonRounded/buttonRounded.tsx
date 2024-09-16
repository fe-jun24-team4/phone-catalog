import styles from './buttonRounded.module.scss';
import classNames from 'classnames';
import { FC } from 'react';
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
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
}

const ButtonRounded: FC<Props> = ({
  title,
  rotate,
  onClick = () => {},
  disabled = false,
  selected = false,
}) => {
  const rotationDegrees = getRotationDegrees(rotate ?? 0);

  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className={classNames(styles.buttonRounded, {
        [styles.selected]: selected,
      })}
      onClick={handleClick}
      disabled={disabled}
    >
      {title ? (
        `${title}`
      ) : (
        <span
          className={'icon-chevron-left'}
          style={{ transform: `rotate(${rotationDegrees}deg)` }}
        ></span>
      )}
    </button>
  );
};

export default ButtonRounded;
