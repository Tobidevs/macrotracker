import AddFood from "../components/AddFood";
import NavBar from "../components/NavBar";
import Stats from "../components/Stats";
function Dashboard() {
  return (
    <>
      <NavBar />
      <Stats/>
      <AddFood/>
    </>
  );
}
export default Dashboard;
