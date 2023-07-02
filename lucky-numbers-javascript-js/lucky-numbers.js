
export function twoSum(array1, array2) {
  return Number(array1.join("")) + Number(array2.join(""));
}

export function luckyNumber(value) {
  const makeString = String(value);
  const makeArray = makeString.split("");
  const reverseArray = makeArray.reverse();
  const makeReverseString = reverseArray.join("");
  return makeString === makeReverseString;
}

/*      *BY CHAIN METHOD*
 export function luckyNumber(value) {
  let reversedValue = Number(String(value)
                              .split('')
                              .reverse()
                              .join('')
                            );
  return value === reversedValue;
}
 */
export function errorMessage(input) {
 if(!input){
   return 'Required field';
 } else {
   return Boolean(input) &&  Number(input) ? '' : 'Must be a number besides 0';
 }
}
