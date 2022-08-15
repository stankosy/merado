import format from 'date-fns/format';

export const ellipsedId = (string: string): string => {
  if (!string) return string;

  return `${string.slice(0, 2)}...${string.slice(-5)}`;
};

export const formatDate = (
  date: Date,
  formatString: string = 'dd/MM/yyyy',
): string => format(date, formatString);

export const capitalize = (str: string): string => {
  return (
    str &&
    str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
    )
  );
};
