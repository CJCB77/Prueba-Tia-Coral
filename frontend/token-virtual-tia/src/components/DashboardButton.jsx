import { NavLink } from "react-router-dom";

function DashboardButton({ text, icon, path }) {
  return (
    <NavLink to={path}>
      <div className="bg-neutral-50 px-10 py-8 mx-auto rounded-lg shadow-lg text-sm flex flex-col items-center">
        <i className={`fa-solid fa-${icon} text-3xl text-red-600 mb-4`}></i>
        <p className="font-semibold text-md">{text}</p>
      </div>
    </NavLink>
  );
}

export default DashboardButton;
