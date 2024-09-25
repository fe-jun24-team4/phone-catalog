import { useState } from 'react';
import { Validator, ValidatorFunc } from '../types/Validator';

export function useValidator(validator: ValidatorFunc, wait: number) {
  const [state] = useState(new Validator(validator, wait));

  return state;
}
