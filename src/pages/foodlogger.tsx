import { useState } from "react";

import NavBar from "../components/NavBar";

function Foodlogger() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSubmit = () => {
    return;
  };
  return (
    <>
      <div className="pt-10 h-screen">
        <NavBar />
        <main className="h-3/4  flex justify-center">
          <div className=" w-1/3">
            <div className="h-1/8 w-full flex justify-center items-center ">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Search Food..."
                  className="bg-[#eff0fa] text-[#1f2022] rounded-4xl pl-4 pt-2 pb-2 w-60"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="cursor-pointer text-xl ml-5 bg-[#18181B] pt-3 pb-3 pr-6 pl-6 rounded-3xl">
                  Search
                </button>
              </form>
            </div>
            <div className="h-7/8 w-full"></div>
          </div>
          <div className="w-1/3"></div>
        </main>
      </div>
    </>
  );
}

export default Foodlogger;
