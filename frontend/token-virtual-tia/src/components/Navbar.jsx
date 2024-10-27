import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-red-600 flex py-2 px-6 shadow-sm">
      <h1 className="mr-5 text-lg font-bold text-white">
        <a href="#">
          <i className="fa-solid fa-unlock mr-2"></i>
          Prueba Tia
        </a>
      </h1>
      <div className="ml-auto">
        <a className="bg-slate-300 py-1 px-2 rounded-lg hover:bg-slate-400 text-sm" href="#">
            Cerrar Sesión
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
