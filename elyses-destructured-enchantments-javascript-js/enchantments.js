export function getFirstCard(deck) {
  const [a, ...{ length }] = deck;
  return a;
  
}

export function getSecondCard(deck) {
  const [a, b, ...{ length }] = deck;
  return b;
}

export function swapTopTwoCards(deck) {
  let [a, b, ...{ length }] = deck;
   [a, b] = [b, a];
   return [a, b, ...deck.slice(2)];
}

export function discardTopCard(deck) {
  const [a,  ...length] = deck;
  return [a, length];
}

export function insertFaceCards(deck) {
  let [a, ...length] = deck;
  const [...face] = ['jack', 'queen', 'king'];
  return [a, ...face, ...length];
}
