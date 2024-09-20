import React from 'react';

export const getDescriptionContent = (value: string[] | string) => {
  if (Array.isArray(value)) {
    return value.map(item => <p key={item}>{item}</p>);
  }

  return value;
};
