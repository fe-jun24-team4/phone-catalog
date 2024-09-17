import { createContext, PropsWithChildren, useContext, useState } from 'react';

type Contract = {
  path: string[];

  push: (title: string) => void;
  pop: () => void;
};

const ContractContext = createContext<Contract | undefined>(undefined);

type BreadcrumbsProviderProps = {
  home: string;
};

export const BreadcrumbsContextProvider = ({
  home,
  children,
}: PropsWithChildren<BreadcrumbsProviderProps>) => {
  const [path, setPath] = useState<string[]>([]);

  function push(title: string) {
    //console.log(`pushed ${title}`);

    setPath(prev => [title, ...prev]);
  }

  function pop() {
    //console.log(`popped ${path[path.length - 1]}`);

    setPath(prev => prev.slice(0, prev.length - 1));
  }

  const contract: Contract = {
    path: [home, ...path],

    push,
    pop,
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

export function useBreadcrumbsContextUnsertain() {
  return useContext(ContractContext);
}
