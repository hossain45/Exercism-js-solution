export function timeToMixJuice(name) {
   switch(name){
     case 'Pure Strawberry Joy':
       return   0.5;
       break;
     case 'Energizer':
       return 1.5;
       break;
     case 'Green Garden':
       return 1.5;
       break;
     case 'Tropical Island':
       return 3;
       break;
     case 'All or Nothing':
       return 5;
       break;
     default:
       return 2.5;
   }
}


export function limesToCut(wedgesNeeded, limes) {
    let limeCount = 0
    for (const limeSize of limes) {
        if (wedgesNeeded <= 0) break; 
// The first break statement in the code is used to 
// break out of the for...of loop early if the 
// wedgesNeeded value becomes zero or negative. 
        switch (limeSize) {
            case 'small':
                wedgesNeeded -= 6;
                break;
            case 'medium':
                wedgesNeeded -= 8;
                break;
            case 'large':
                wedgesNeeded -= 10;
                break;
        }
        limeCount++;
    }
    return limeCount;
}

export function remainingOrders(timeLeft, orders) {
  while(timeLeft > 0){
    const order = orders[0];
    switch(order){
      case 'Pure Strawberry Joy':
        timeLeft -= 0.5;
        break;
      case 'Energizer':
        timeLeft -= 1.5;
        break;
      case 'Green Garden':
        timeLeft -= 1.5;
        break;
      case 'Tropical Island':
        timeLeft -= 3;
        break;
      case 'All or Nothing':
        timeLeft -= 5;
        break;
      default:
        timeLeft -= 2.5;
    }
    orders.shift();
  }
  return orders;
}