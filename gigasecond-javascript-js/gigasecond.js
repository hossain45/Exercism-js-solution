const gigasecondInMs = 1e12;
export const gigasecond = (date) => {
  return new Date(date.getTime()+ gigasecondInMs);
};
