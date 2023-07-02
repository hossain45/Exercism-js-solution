export function createVisitor(name, age, ticketId) {
   return {
    name,
    age,
    ticketId,
   }; 
}

export function revokeTicket(visitor) {
  visitor['ticketId'] = null;
  return visitor;
}

export function ticketStatus(tickets, ticketId) {
  if(typeof tickets[ticketId] === 'string'){
    return 'sold to ' + tickets[ticketId];
  } else if(tickets[ticketId] === null) {
    return 'not sold';
  } else {
    return 'unknown ticket id';
  } 
}

export function simpleTicketStatus(tickets, ticketId) {
   return tickets[ticketId] ?? "invalid ticket !!!";
}

export function gtcVersion(visitor) {
  return visitor.gtc?.version;
}
/* tickets[ticketId] === 'string';
    return tickets[ticketId] = tickets[ticketId] ?? 1;
  tickets[ticketId] === null;
      return tickets[ticketId] = tickets[ticketId] ?? 'invalid ticket !!!'1;
  tickets[ticketId] === undefined;
      return tickets[ticketId] = tickets[ticketId] ?? 'invalid ticket !!!';*/