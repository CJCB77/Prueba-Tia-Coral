import TokenDisplay from "../components/TokenDisplay";
import { Navigate } from "react-router";

function TempKey() {


  return (
    <main className="flex-grow flex flex-col items-center">
      {/* <button className="shadow-md p-4 mt-4 rounded-full">
        <i className="fa-solid fa-arrow-left text-3xl text-red-600" />
      </button> */}
      <h2 className="mt-12 text-4xl font-bold">
        <span className="text-red-600">Clave Virtual</span>
      </h2>
      <div className="mt-24">
        <TokenDisplay />
      </div>
    </main>
  );
}

export default TempKey;
