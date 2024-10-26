import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <form
      className="bg-neutral-50 w-2/5 px-4 py-8 mx-auto mt-12 rounded-lg shadow-lg text-sm"
      onSubmit={handleSubmit}
    >
      <header>
        <div className="text-center my-4">
          <span className="font-bold text-xl">Iniciar Sesion</span>
        </div>
      </header>
      <div className="p-4">
        <div className="mt-4">
          <label htmlFor="username" className="block text-sm">
            Email:
          </label>
          <input
            type="text"
            id="email"
            className="w-full border border-neutral-300 rounded-md p-1"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block text-sm">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-neutral-300 rounded-md p-1"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </div>
      <footer className="p-4 rounded-b-md">
        <button className="bg-red-600 text-white rounded-md p-2 w-full font-semibold">
          Continuar
        </button>
        <div className="flex justify-between mt-4 px-2">
          <a
            href="/forgot-password"
            className="text-xs font-light hover:underline decoration-gray-500"
          >
            Olvido su contraseña?
          </a>
          <a
            href="/register"
            className="text-xs font-light hover:underline decoration-gray-500"
          >
            ¿No tienes cuenta? Registrate
          </a>
        </div>
      </footer>
    </form>
  );
}

export default Login;
