import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logOut } = useAuth();

  return (
    <nav className="bg-red-600 flex py-2 px-6 shadow-sm">
      <h1 className="mr-5 text-lg font-bold text-white">
        <Link to={"/"}>
          <i className="fa-solid fa-unlock mr-2"></i>
          Prueba Tia
        </Link>
      </h1>
      {user && (
        // Username display
        <div className="text-white font-semibold">
          Hola, {user.email}
        </div>
      )}
      {user && (
        <div className="ml-auto">
          {/* Logout user button */}
          <button
            onClick={logOut}
            className="bg-white text-red-600 px-4 py-1 rounded-md font-semibold"
          >
            Salir
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
