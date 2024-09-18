import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { RouteNames } from '../../../enums/RouteNames';

import styles from './iconsComponent.module.scss';
import { isLinkActive } from '../isLinkActive';
import { useHandleMenuAction } from '../hooks/useHandleMenuAction';

interface Props {
  mobile?: boolean;
}

export const IconsComponent: FC<Props> = ({ mobile }) => {
  const { handleMenuAction } = useHandleMenuAction();

  const getIconActiveClassName = (params: { isActive: boolean }) =>
    classnames(styles.icon, isLinkActive(styles.active, params));

  return (
    <div
      className={classnames(styles.icons, {
        [styles.mobile]: mobile,
      })}
    >
      <NavLink
        to={RouteNames.favorites}
        className={getIconActiveClassName}
        onClick={handleMenuAction}
      >
        <span className="icon-heart" />
      </NavLink>
      <NavLink to={RouteNames.cart} className={getIconActiveClassName} onClick={handleMenuAction}>
        <span className="icon-shopping-bag"></span>
      </NavLink>
    </div>
  );
};
