import FoodCard from "./FoodCard";

const foods = [
  {
    name: "Honey Pepperoni Pizza",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1594007654729-407eedc4fe24?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Premium Omakase Box",
    price: 24.5,
    image:
      "https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Signature Buddha Bowl",
    price: 16,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
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