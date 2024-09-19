import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useFetchData } from '../../hooks/useFetch';
import { HOST } from '../../utils/constants/host';
import { Product } from '../../types/Product';

export const DetailsPage: React.FC = () => {
  const { pathname } = useLocation();

  const category = pathname.split('/')[1];

  const { productId } = useParams<{ category: string; productId: string }>();

  const { data } = useFetchData<Product>(`${HOST}/api/${category}.json`);

  const product = data?.find(item => item.id === productId);


  return <div>DetailsPage</div>;
};
