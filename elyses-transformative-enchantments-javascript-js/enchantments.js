export function seeingDouble(deck) {
  return deck.map((value) => value * 2);
}

export function threeOfEachThree(deck) {
  const result = deck.reduce((prevValue, currentValue) => {
    if (currentValue === 3) {
      prevValue.push(currentValue, currentValue, currentValue);
    } else {
      prevValue.push(currentValue);
    }
    return prevValue;
  }, []);
  return result;
}

export function middleTwo(deck) {
  const midNum = Math.round(deck.length / 2);
  const result = deck.splice(midNum - 1);
  let [a, b] = result;
  return [a, b];
} /* or more convenient way---
export function middleTwo(deck) {
  const mid = deck.length / 2 - 1
  return deck.slice(mid, mid+2);
}*/

export function sandwichTrick(deck) {
  const mid = deck.length / 2;
  deck.splice(mid, 0, deck.pop());
  deck.splice(mid, 0, deck.shift());
  return deck;
}

export function twoIsSpecial(deck) {
  return deck.filter(deck => deck == 2);
}

export function perfectlyOrdered(deck) {
  deck.sort((a, b) => a - b);
  return deck;
}

export function reorder(deck) {
  return deck.reverse();
}
