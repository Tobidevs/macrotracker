import { useState, useEffect } from "react";
import searchFoods from "../services/api";
import NavBar from "../components/NavBar";
import FoodCard from "../components/FoodCard";

function Foodlogger() {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadFoods = async () => {
      try {
        const foods = await searchFoods();
        setSearchQuery(foods);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadFoods();
  }, []);

  const handleSearch = () => {
    return;
  };
  return (
    <>
      <div className="pt-10 h-screen">
        <NavBar />
        <main className="h-3/4 flex justify-center">
          <div className=" w-1/3 bg-[#1D1D20] rounded-3xl">
            <div className="h-1/8 w-full flex justify-center items-center ">
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search Food..."
                  className="bg-[#eff0fa] text-[#1f2022] rounded-4xl pl-5 pt-3 pb-3 w-66 text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="cursor-pointer  ml-5 bg-[#18181B] pt-3 pb-3 pr-6 pl-6 rounded-3xl"
                >
                  Search
                </button>
              </form>
            </div>
            <h1 className="text-xl w-full pl-14 h-10">Foods</h1>
            <div className="h-6/8 w-full flex flex-col gap-2 items-center">
              <FoodCard />
              <FoodCard />
              <FoodCard />
            </div>
          </div>
          <div className="w-1/3"></div>
        </main>
      </div>
    </>
  );
}

export default Foodlogger;
