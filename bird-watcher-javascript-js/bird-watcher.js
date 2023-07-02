export function totalBirdCount(birdsPerDay) {
  let totalBirds = 0;
  for (let i = 0; i < birdsPerDay.length; i++) { 
    totalBirds = birdsPerDay[i] + totalBirds;
  }
  return totalBirds;
}

export function birdsInWeek(birdsPerDay, week) {
  let totalBirds = 0;
  let firstIndex = (week - 1) * 7;
  let lastIndex = week * 7;
  for (let i = firstIndex; i < lastIndex; i++) { 
    totalBirds = birdsPerDay[i] + totalBirds;
  }
  return totalBirds;
}
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) birdsPerDay[i]++;
  return birdsPerDay;
}

  

