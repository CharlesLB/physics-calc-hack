export const getMedia = (values: number[]): number => {
  const media = values.reduce((sum, num) => sum + num, 0) / values.length;
  return media;
};

export const getPopulationDeviation = (values: number[]): number => {
  const media = getMedia(values);

  const deviation =
    (values.reduce((sum, num) => sum + (num - media) ** 2, 0) /
      values.length) **
    0.5;

  return deviation;
};

export const getSampleDeviation = (values: number[]): number => {
  const media = getMedia(values);

  const deviation =
    (values.reduce((sum, num) => sum + (num - media) ** 2, 0) /
      (values.length - 1)) **
    0.5;

  return deviation;
};

export const getMediaDeviation =  (values: number[]): number => {
  const sampleDeviation = getSampleDeviation(values);

  return sampleDeviation / values.length ** 0.5;
};
