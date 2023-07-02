export function isValidCommand(command) {
  return /^chatbot/i.test(command);
}

export function removeEmoji(message) {
  let regex = new RegExp(/emoji\d*/, 'gi');
  let result = message.replace(regex, '');
  return result;
}

export const checkPhoneNumber = number => /\(\+\d{2}\) \d{3}-\d{3}-\d{3}/.test(number) ? 
  "Thanks! You can now download me to your phone." :
  `Oops, it seems like I can't reach out to ${number}`;

export function getURL(userInput) {
  const regex = /\w*\.\w*/gi;
  return userInput.match(regex);
}

export function niceToMeetYou(fullName) {
  const [surname, name] = fullName.match(/\w+/g);
  return `Nice to meet you, ${name} ${surname}`;
}

