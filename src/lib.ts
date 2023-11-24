export const absolute = (num: number) => {
  if (num > 0) return num;
  if (num < 0) return -num;
  return 0;
};

export const greet = (name: string) => {
  return `Welcome ${name}!`;
};

export const getCurrencies = () => {
  return ["USD", "AUD", "EUR"];
};
