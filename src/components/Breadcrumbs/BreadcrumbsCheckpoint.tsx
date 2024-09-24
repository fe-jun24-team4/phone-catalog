import React, { PropsWithChildren } from 'react';
import { BreadcrumbsContextProvider } from './context/BreadcrumbsContext';

type BreadcrumbsCheckpointProps = {
  title: string;
};

export const BreadcrumbsCheckpoint = ({
  title,
  children,
}: PropsWithChildren<BreadcrumbsCheckpointProps>) => {
  return <BreadcrumbsContextProvider title={title}>{children}</BreadcrumbsContextProvider>;
};
