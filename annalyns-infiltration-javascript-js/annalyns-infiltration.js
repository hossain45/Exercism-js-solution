//Simplify or remove if statements.
//This exercise is meant to explore booleans and boolean operators. 
//No if statements are required to complete this exercise.
  
const knightIsAwake = true;
export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

const archerIsAwake = false;
const prisonerIsAwake = true;

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || prisonerIsAwake || archerIsAwake;
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return prisonerIsAwake && !archerIsAwake;
  }

export function canFreePrisoner( 
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
 ) {
 return (petDogIsPresent || !petDogIsPresent && !knightIsAwake && prisonerIsAwake) && !archerIsAwake;
}
