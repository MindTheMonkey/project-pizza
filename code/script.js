// We start by wrapping all the code as a function. That way we can terminate the code at any point with a return.
const mikesPizzeria = () => {
  // Start here

  // Step 1 - Welcome and introduction
  // Your code goes here
  alert(
    `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
  );
  // Lets ask for the customers name and save it to a variable
  const customerName = prompt(`Welcome to Mike's Pizzera. What's your name?`);

  // Let's check if the Customer entered a name and if they did greet them with an alert
  if (customerName.trim() === "") {
    alert(`Sorry you need to provide a name to order food.`);
    return;
  }
  else {
    alert(`Welcome ${customerName}!`);
  }

  // Step 2 - Food choice
  //  To simplify the code and avoid repeating code we define a food object with the Food Types and arrays with the corresponding sub food types.
  const food = {
    "Pizza": ["Napolitana","Hawaian","Pepperoni"],
    "Pasta": ["Spaghetti Carbonara","Fettuccine Alfredo","Cheesy Tortellini"],
    "Salad": ["Caesar Salad","Caprese Salad","Greek Salad"]
  }

  // We prompt the customer for the number matching the food type and parse it to a integer.
  const orderType = parseInt(
    prompt(
      `What type of food would you like to order?
        Enter the number:
        1. Pizza
        2. Pasta
        3. Salad
      `
    )
  );

  // We define a variable to store the selected food type as a sting
  let foodType = "";

  // If the customer selcted 1,2 or 3 we save the foodType and confirm their choice. If they entered anything else we prompt them with a error and shutdown.
  if (orderType === 1) {
    foodType = "Pizza";
  }
  else if (orderType === 2) {
    foodType = "Pasta";
  }
  else if (orderType === 3) {
    foodType = "Salad";
  }
  else {
    alert(`You selected an invalid option. Please come back later.`);
    return;
  }

  alert(`You selected ${foodType}!`);

  // Step 3 - Subtype choice
  // Lets grab the subtypes array from our food object based on the foodType selected

  const subtypes = food[foodType];

  // We use the subtypes array to populate our prompt. Since the array index starts at 0 we use index 0, 1, 2 to get the subtypes.
  const orderSubtype = parseInt(
    prompt(
      `Please select the ${foodType} you would like to order.
        Enter the number:
        1. ${subtypes[0]}
        2. ${subtypes[1]}
        3. ${subtypes[2]}
      `
    )
  );

  let itemOrdered = "";
  // we check if the order subtype is 1,2 or 3 and if so store the item ordered. For any other case we give an error and exit
  if (orderSubtype === 1 || orderSubtype === 2 || orderSubtype === 3) {
    // we subtract 1 from orderSubtype to get the correct index and save it to itemOrdered
    itemOrdered = subtypes[orderSubtype - 1];
    alert(`Great choice! You ordered ${itemOrdered}`);
  }
  else {
    alert(`I'm sorry. You tried to order something not on the menu. Goodbye`);
    return;
  }

  // Step 4 - Age
  const customerAge = parseInt(
    prompt(`In order for us to calculate the total amount please provide your age:`)
  );

  // We initialize two variables for portion size and price and then based on age we define these variables. If age input is invalid we give a error message and exit
  let itemSize = "";
  let itemPrice = 0;
  // We check if age is between 0-17. We have equal or above zero as negative numbers would match if we just used below 18.
  if ( (customerAge >= 0) && (customerAge < 18) ) {
    itemSize = "childsize";
    itemPrice = 10;
  }
  else if (customerAge >= 18) {
    itemSize = "adultsize";
    itemPrice = 15;
  }
  else {
    alert(`Invalid age provided, your order has been cancelled`);
    return;
  }
  // After validating the age input we now construct the confirmation message.
  const confirmationMessage = `You ordered a ${itemSize} ${itemOrdered}. Your order total is ${itemPrice}`;

  // Step 5 - Order confirmation
  const confirmOrder = parseInt(
    prompt(
      `${confirmationMessage}
        Enter a number to confirm:
        1  - Yes
        2 - No
      `
    )
  );

  // Finally we have prompted the user to confirm their order and based on their input we either approve or decline the order. If the user provides invalid data we give an error and return.
  if (confirmOrder === 1) {
    alert(`Thank you for confirming your order. Your food is being prepared.`);
  }
  else if (confirmOrder === 2) {
    alert(`We have cancelled your order. We look forward to serve you in the future.`);
  }
  else {
    alert(`Incorrect selection. Unfortunately we were unable to confirm your order.`);
    return;
  }
}

// Above we declared the pizzeria code as a function but we haven't executed it. We now execute the function and as soon as we return from the function our script is done.
mikesPizzeria();
