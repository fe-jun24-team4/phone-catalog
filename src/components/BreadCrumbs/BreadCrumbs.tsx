import styles from './Breadcrumbs.module.scss';
import cn from 'classnames';

import React from 'react';
import { useBreadcrumbsContext } from './context/BreadcrumbsContext';
import { Fragment } from 'react/jsx-runtime';
import { Link } from 'react-router-dom';

function goUpTimes(n: number) {
  return './' + '../'.repeat(n);
}

export const Breadcrumbs = () => {
  const { path } = useBreadcrumbsContext();

  const shortPath = path.slice(1);

  return (
    <div className={styles.breadcrumbs}>
      <Link to={goUpTimes(path.length - 1)} className={cn(styles.checkpoint, 'icon-home')} />
      {shortPath.map((title, index) => (
        <Fragment key={title}>
          <div className="icon-chevron-right" />
          <Link to={goUpTimes(shortPath.length - 1 - index)} className={styles.checkpoint}>
            {title}
          </Link>
        </Fragment>
      ))}
    </div>
  );
};
