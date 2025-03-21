import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="flex items-center w-full h-32 justify-center mt-24">
        <h1 className=" text-5xl">Calorie Tracker</h1>
        <nav className="w-80 h-1/2 ml-12 flex items-center justify-around bg-[#2D2D32] rounded-2xl" >
          <Link to="/" className="text-xl">Dashboard</Link>
          <Link to="/foodlog" className="text-xl">Food Log</Link>
        </nav>
      </div>
    </>
  )
}
export default NavBar