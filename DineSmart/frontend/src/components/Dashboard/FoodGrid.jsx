import FoodCard from "./FoodCard";

const foods = [
  {
    name: "Honey Pepperoni Pizza",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1601924582971-c5d5c9b2c2a6",
  },
  {
    name: "Premium Omakase Box",
    price: 24.5,
    image:
      "https://images.unsplash.com/photo-1562158070-57e9d6904f20",
  },
  {
    name: "Signature Buddha Bowl",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },
];

function FoodGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {foods.map((food, index) => (
        <FoodCard key={index} food={food} />
      ))}

    </div>
  );
}

export default FoodGrid;