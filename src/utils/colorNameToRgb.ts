// too vibrant...
// const colors: { [key: string]: string } = {
//   black: '#000000',
//   green: '#00FF00',
//   yellow: '#FFFF00',
//   white: '#FFFFFF',
//   purple: '#800080',
//   red: '#FF0000',
//   spacegray: '#4A4A4A',
//   midnightgreen: '#004953',
//   gold: '#FFD700',
//   silver: '#C0C0C0',
//   rosegold: '#B76E79',
//   coral: '#FF7F50',
//   midnight: '#191970',
//   spaceblack: '#1C1C1C',
//   blue: '#0000FF',
//   pink: '#FFC0CB',
//   graphite: '#53565A',
//   sierrablue: '#007BA7',
//   'rose gold': '#B76E79',
//   'sky blue': '#87CEEB',
//   starlight: '#F5F5DC',
//   'space gray': '#4A4A4A',
// };

const colors: { [key: string]: string } = {
  black: '#1C1C1C',
  green: '#9ACD9A',
  yellow: '#F0E68C',
  white: '#F5F5F5',
  purple: '#9370DB',
  red: '#CD5C5C',
  spacegray: '#6E6E6E',
  midnightgreen: '#2E4E4E',
  gold: '#D4AF37',
  silver: '#D3D3D3',
  rosegold: '#C48793',
  coral: '#E9967A',
  midnight: '#2C3E50',
  spaceblack: '#2F2F2F',
  blue: '#4682B4',
  pink: '#FFB6C1',
  graphite: '#6B6B6B',
  sierrablue: '#6A9FB5',
  'rose gold': '#C48793',
  'sky blue': '#A2CFFE',
  starlight: '#EDEAD0',
  'space gray': '#6E6E6E',
};

export function colorNameToRgb(name: string): string {
  return colors[name] ?? '#ffffff';
}
