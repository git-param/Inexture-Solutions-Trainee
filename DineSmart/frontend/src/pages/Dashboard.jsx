import Sidebar from "../components/Dashboard/Sidebar";
import Topbar from "../components/Dashboard/Topbar";
import CategoryTabs from "../components/Dashboard/CategoryTabs";
import FoodGrid from "../components/Dashboard/FoodGrid";

function Dashboard() {
  return (
    <div className="bg-black min-h-screen text-white flex">

      <Sidebar />

      <div className="flex-1 p-6">

        <Topbar />

        <CategoryTabs />

        <h2 className="text-xl font-semibold mt-8 mb-4">
          Recommended For You
        </h2>

        <FoodGrid />

      </div>

    </div>
  );
}

export default Dashboard;