function Sidebar() {
  return (
    <div className="w-20 bg-[#0f0f0f] border-r border-white/10 flex flex-col items-center py-6 gap-8">

      <div className="bg-red-600 w-10 h-10 flex items-center justify-center rounded-lg">
        🍴
      </div>

      <div className="flex flex-col gap-6 text-gray-400 text-xl">
        <span>🏠</span>
        <span>📋</span>
        <span>❤️</span>
        <span>⚙️</span>
      </div>

    </div>
  );
}

export default Sidebar;