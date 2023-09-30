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
  // Your code goes here

  // Step 3 - Subtype choice
  // Your code goes here

  // Step 4 - Age
  // Your code goes here

  // Step 5 - Order confirmation
  // Your code goes here
}

mikesPizzeria();
