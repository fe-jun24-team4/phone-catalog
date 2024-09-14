import { FC, useState } from "react";
import styles from './buttonRounded.module.scss';
import classNames from "classnames";
import { RotateDegs } from "../buttonFavorite/RotateDegs";

export interface Props {
   title?: string;
   icon?: string;
   rotateDeg?: RotateDegs;
}

const ButtonRounded: FC<Props> = ({ title, icon, rotateDeg }) => {
   const [isSelected, setIsSelected] = useState(false);

  return (
     <button className={classNames(styles.buttonRounded, {
      [styles.selected] : isSelected,
     })}
     onClick={() => setIsSelected(true)}
     >
        {title ? `${title}` : ( 
            <span className={icon} style={{transform: `rotate(${rotateDeg}deg)`}}></span>
        )}
      </button>
  )
}

export default ButtonRounded;