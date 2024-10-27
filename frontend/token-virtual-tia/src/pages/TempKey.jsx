import TokenDisplay from "../components/TokenDisplay";

function TempKey() {
  return (
    <main className="flex-grow flex flex-col items-center">
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
