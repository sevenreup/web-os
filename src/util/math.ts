export function randomOffset(size: number, percent: number) {
  const sign = Math.sign(Math.random() - 0.5);
  return sign * Math.floor(((size * percent) / 100) * Math.random());
}

export function minMax(min: number, value: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
