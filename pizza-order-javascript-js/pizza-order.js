export function pizzaPrice(pizza, ...extras) {
  // Define the price mapping
  const priceMapping = {
    'Margherita': 7,
    'Caprese': 9,
    'Formaggio': 10,
    'ExtraSauce': 1,
    'ExtraToppings': 2,
    // Add more pizza types and prices as needed
  };

  // Calculate the base price of the pizza
  let totalPrice = priceMapping[pizza];

  // Calculate the price of each extras recursively
  for (let extra of extras) {
    if (priceMapping.hasOwnProperty(extra)) {
      totalPrice += priceMapping[extra];
    }
  }
  return totalPrice;
}

export function orderPrice(pizzaOrders) {
  let price = 0; 
  // Calculate pizzaOrders recrusively 
  for (let order of pizzaOrders) {
    // Object destructuring assignment
    const { pizza, extras } = order;
    const totalPrice = pizzaPrice(pizza, ...extras);
    price += totalPrice;
    }
  
  return price;
}

