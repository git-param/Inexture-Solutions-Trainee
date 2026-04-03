// Problem 2: Product Management Using Classes
// Create a Product class that:

// Accepts name and price using a constructor
// Has a method to return product details
// Your task is to:

// Create at least two product objects
// Display their details using the class method

class product{
    constructor(name,price)
    {
        this.name=name;
        this.price=price;
    }
    showdetails()
    {
        return `The product ${this.name}'s price is ₹${this.price}!`;
    }
}

const p1=new product("Watch",6000);
console.log(p1.showdetails());
const p2=new product("Tv",70000);
console.log(p2.showdetails());