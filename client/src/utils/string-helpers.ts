export const ellipsedId = (string) => {
  if (!string) return string;

  return `${string.slice(0, 2)}...${string.slice(-5)}`;
};
