import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TempKey from "./pages/TempKey";
import TokenHistory from "./pages/TokenHistory";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Register />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/clave" element={<TempKey />} />
                <Route path="/historial" element={<TokenHistory />} />
              </Route>
            </Routes>
          </div>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
