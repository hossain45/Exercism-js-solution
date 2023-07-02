export function cardTypeCheck(stack, card) {
  let i = 0;
  stack.forEach((getCard) => {
    return (getCard == card)? i++ : i;
  });
  return i;
}

export function determineOddEvenCards(stack, type) {
  const rest = type ? 0 : 1;
  let count = 0;
  for (const card of stack) {
    if (card % 2 === rest) {
      count += 1
    };
  };
  return count;
}