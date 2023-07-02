export function frontDoorResponse(line) {
  return line[0];
}

export function frontDoorPassword(password){
  return  password.slice(0, 1).toUpperCase() +
    password.slice(1).toLowerCase();
}
  
export function backDoorResponse(line) {
  const password = line.trim();
  return password[password.length - 1];
} 

export function backDoorPassword(password){
  return  password.slice(0, 1).toUpperCase() +
    password.slice(1).toLowerCase() + ', please';
}
