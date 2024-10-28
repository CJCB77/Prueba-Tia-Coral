import DashboardButton from "../components/DashboardButton";

function Dashboard() {
  return (
    <main className="flex-grow flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 gap-4">
            <DashboardButton text="Clave Temporal" icon={"key"} path={"/clave"}/>
            <DashboardButton text="Historial de Claves" icon={"list"} path={"/historial"} />
        </div>
    </main>
  );
}

export default Dashboard;
