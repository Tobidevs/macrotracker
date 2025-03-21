import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard.tsx";
import Foodlog from "./pages/foodlog.tsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/foodlog" element={<Foodlog />} />
      </Routes>
    </>
  );
}

export default App;
