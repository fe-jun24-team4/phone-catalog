import React from 'react';
import { createContext, PropsWithChildren, useContext } from 'react';

type Contract = {
  path: string[];
};

const ContractContext = createContext<Contract | undefined>(undefined);

type Props = {
  title: string;
};

export const BreadcrumbsContextProvider = ({ title, children }: PropsWithChildren<Props>) => {
  const context = useContext(ContractContext);
  const pathSoFar = context?.path ?? [];

  const contract: Contract = {
    path: [...pathSoFar, title],
  };

  return <ContractContext.Provider value={contract}>{children}</ContractContext.Provider>;
};

export function useBreadcrumbsContext() {
  const context = useContext(ContractContext);

  if (!context) {
    throw new Error('BreadcrumbsContext not provided!');
  }

  return context;
}
