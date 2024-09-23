import { useFetchData } from './useFetch';
import { HOST } from '../utils/constants/host';
import { shuffleArray } from '../utils/shuffleArray';

export const useFetchRecommended = <T>() => {
  const { data: phones } = useFetchData<T>(`${HOST}/api/phones.json`);

  const recommendedData: T[] = shuffleArray(phones).slice(0, 6);

  return {
    recommendedData,
  };
};
