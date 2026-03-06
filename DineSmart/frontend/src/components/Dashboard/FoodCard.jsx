function FoodCard({ food }) {
  return (
    <div className="bg-[#151515] rounded-xl overflow-hidden border border-white/10">

      <img
        src={food.image}
        className="h-44 w-full object-cover"
      />

      <div className="p-4">

        <h3 className="font-semibold">
          {food.name}
        </h3>

        <p className="text-red-500 mt-1">
          ${food.price}
        </p>

      </div>

    </div>
  );
}

export default FoodCard;