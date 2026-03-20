function Topbar() {
  return (
    <div className="flex justify-between items-center mb-6">

      <div className="bg-[#1a1a1a] px-6 py-3 rounded-full w-[500px] text-gray-400">
        ✨ Ask AI: I want something spicy and vegan under $20...
      </div>

      <div className="flex items-center gap-4">
        <span>🛒</span>
        <img
          src="https://i.pravatar.cc/40"
          className="w-10 h-10 rounded-full"
        />
      </div>

    </div>
  );
}

export default Topbar;