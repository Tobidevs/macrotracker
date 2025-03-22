import AddFood from "../components/AddFood";
import NavBar from "../components/NavBar";
import Stats from "../components/Stats";
function Dashboard() {
  return (
    <>
      <div className="pt-32">
        <NavBar />
        <Stats />
        <AddFood />
      </div>
    </>
  );
}
export default Dashboard;
