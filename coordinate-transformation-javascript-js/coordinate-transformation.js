export function translate2d(dx, dy) {
  return function translate(x, y) {
   return [x + dx, y + dy] ;
  };
}

export function scale2d(sx, sy) {
  return function scale(x, y) {
   return [x * sx, y * sy];
  };
}

export function composeTransform(f, g) {
  return function (x, y) {
    return g(...f(x, y))
  } 
}

export function memoizeTransform(f) {
  let save, savedX, savedY
  return function (x, y) {
    if (savedX !== x || savedY !== y) {
      save = f(x, y)
      savedX = x
      savedY = y
    }
    
    return save
  }
}