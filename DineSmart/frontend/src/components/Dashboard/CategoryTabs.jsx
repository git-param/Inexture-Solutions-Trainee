const categories = [
  "Cuisines",
  "Pizza",
  "Sushi",
  "Healthy",
  "Vegan",
  "Burgers",
  "Desserts",
  "Mexican",
];

function CategoryTabs() {
  return (
    <div className="flex gap-3 mt-4">

      {categories.map((cat, index) => (
        <button
          key={index}
          className={`px-5 py-2 rounded-full text-sm
          ${index === 0
            ? "bg-red-600 text-white"
            : "bg-[#1a1a1a] text-gray-300"}`}
        >
          {cat}
        </button>
      ))}

    </div>
  );
}

export default CategoryTabs;