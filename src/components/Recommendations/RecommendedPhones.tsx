import React, { useMemo } from 'react';
import { useFetchRecommended } from '../../hooks/useFetchRecommended';
import { shuffleArray } from '../../utils/shuffleArray';
import { Product } from '../../types/Product';

export const RecommendedPhones: React.FC = () => {
  const { data: phones, isLoading, isError } = useFetchRecommended<Product[]>('api/phones.json');

  const recommendedPhones = useMemo(() => {
    if (!phones) {
      return [];
    }

    const shuffledPhones = shuffleArray(phones);

    return shuffledPhones.slice(0, 5);
  }, [phones]);

  return (
    <div>
      {isLoading && <div>Loading recommendations...</div>}
      {isError && <div>Failed to load recommendations...</div>}
      {!isLoading && !isError && (
        <>
          <h2>Recommended Phones</h2>
          <ul>
            {recommendedPhones.map(phone => (
              <li key={phone.id}>
                <h3>{phone.name}</h3>
                <p>Category: {phone.category}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
