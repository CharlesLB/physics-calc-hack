export const getSumAndSubUncertain = (dx: number, dy: number): number => {
  return ((1 * dy) ** 2 + (1 * dx) ** 2) ** 0.5;
};

export const getProductAndDivisionUncertain = (
  x: number,
  dx: number,
  y: number,
  dy: number
): number => {
  return (x ** 2 * dy ** 2 + y ** 2 * dx ** 2) ** 0.5;
};
