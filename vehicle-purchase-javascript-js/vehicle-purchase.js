export function needsLicense(kind) {
  return kind === 'car' || kind === 'truck';
}

export function chooseVehicle(option1, option2) {
  if(option1 < option2){
    return (option1) + ' is clearly the better choice.';
  } else{
    return (option2) + ' is clearly the better choice.';
  } 
} 
// return (option1 > option2 ? option2 : option1) + " is clearly the better choice."
// shorthand syntax of if else statement 
// const discount = age < 3 ? 0.2 : age > 10 ? 0.5 : 0.3
// return originalPrice * (1 - discount)


export function calculateResellPrice(originalPrice, age) {
  if(age < 3){
    return originalPrice * .8;
  } else if(age > 10){
    return originalPrice * .5;
  } else {
    return originalPrice * .7;
  }
}