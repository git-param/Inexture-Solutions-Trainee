// Problem 2:

// Create a shopping cart as an array of objects (itemName, price, quantity).

// Calculate the total cart value
// Add a new item using the spread operator
// Display the updated cart

let cart = 
[
    { itemName:"Laptop",price:50000,quantity:1 },
    { itemName:"Mouse",price:500,quantity:2 }
];
let total=0;
for (let {price,quantity} of cart) 
{
    total+=price*quantity;
}

console.log("Total Cart Value:",total);
cart = 
[
  ...cart,
  {itemName:"Headphones",price:2000,quantity:1}
];
console.log("Updated Cart:",cart);
