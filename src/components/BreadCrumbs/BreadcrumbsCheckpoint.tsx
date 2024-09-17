import { PropsWithChildren, useEffect } from 'react';
import {
  BreadcrumbsContextProvider,
  useBreadcrumbsContextUnsertain,
} from './context/BreadcrumbsContext';
import React from 'react';

type BreadcrumbsCheckpointProps = {
  title: string;
};

export const BreadcrumbsCheckpoint = ({
  title,
  children,
}: PropsWithChildren<BreadcrumbsCheckpointProps>) => {
  const context = useBreadcrumbsContextUnsertain();

  useEffect(() => {
    if (context) {
      context.push(title);

      return () => {
        context.pop();
      };
    } else {
      return () => {};
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  if (!context) {
    return <BreadcrumbsContextProvider home={title}>{children}</BreadcrumbsContextProvider>;
  } else {
    return children;
  }
};
