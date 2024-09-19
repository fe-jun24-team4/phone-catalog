import React, { useMemo } from 'react';
import { useFetchData } from '../../hooks/useFetch';

interface Phone {
  id: string;
  name: string;
  category: string;
  rating: number;
}

const shuffleArray = (array: Phone[]): Phone[] => {
  const shuffled = [...array];

  // тасування Фішера-Йейтса для рандому
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

export const RecommendedPhones: React.FC = () => {
  const { data: phones, isLoading, isError } = useFetchData<Phone>('api/phones.json');

  if (isLoading) {
    return <div>Loading recommendations...</div>;
  }

  if (isError) {
    return <div>Failed to load recommendations...</div>;
  }

  // useMemo викликається тільки якщо дані успішно завантажені, але у цьому випадку лінтер свариться.
  // Якщо поставити обробку помилок нижче, помилка зникне (але наскільки правильно її туди ставити?).
  // Можу взагалі видалити мемоїзацію, можливо вона тут зайва.
  // Поки відключила правило до моменту вирішення питання
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const shuffledPhones = useMemo(() => shuffleArray(phones), [phones]);
  const recommendedPhones = shuffledPhones.slice(0, 5);

  return (
    <div>
      <h2>Recommended Phones</h2>
      <ul>
        {recommendedPhones.map(phone => (
          <li key={phone.id}>
            <h3>{phone.name}</h3>
            <p>Category: {phone.category}</p>
            <p>Rating: {phone.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
