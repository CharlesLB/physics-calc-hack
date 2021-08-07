import {
  getProductAndDivisionUncertain,
  getSumAndSubUncertain
} from '@/helpers/Uncertains';

export const getResult = (
  x: number,
  dx: number,
  y: number,
  dy: number,
  operator: '+' | '-' | '/' | '*'
): string => {
  
  const result = {
    '+': x + y,
    '-': x - y,
    '*': x * y,
    '/': x / y
  }[operator];

  const uncertain = {
    '+': getSumAndSubUncertain(dx, dy),
    '-': getSumAndSubUncertain(dx, dy),
    '*': getProductAndDivisionUncertain(x, dx, y, dy),
    '/': getProductAndDivisionUncertain(x, dx, y, dy)
  }[operator];

  return `(${result.toString().replace('.', ',')} +- ${uncertain
    .toString()
    .replace('.', ',')})`;
};
