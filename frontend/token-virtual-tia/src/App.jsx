import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TempKey from "./pages/TempKey";

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/clave" element={<TempKey />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
