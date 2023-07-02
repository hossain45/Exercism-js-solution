export const decodedValue = (color) => {
  let code1 = (COLORS.indexOf(color[0]))
  let code2 = (COLORS.indexOf(color[1]))
  return parseInt(`${code1}${code2}`);
};
export const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
