import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard.tsx";
import Foodlog from "./pages/foodlog.tsx";
import Foodlogger from "./pages/foodlogger.tsx"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/foodlog" element={<Foodlog />} />
        <Route path="/foodlogger" element={<Foodlogger />} />
      </Routes>
    </>
  );
}

export default App;
