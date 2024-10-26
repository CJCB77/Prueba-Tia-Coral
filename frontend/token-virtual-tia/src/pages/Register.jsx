import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, confirmPassword);
  };

  return (
    <form className="bg-neutral-50 w-2/5 px-4 py-8 mx-auto mt-12 rounded-lg shadow-lg text-sm" onSubmit={handleSubmit}>
      <header>
        <h2 className="text-center text-lg font-semibold">
          Registrate para generar tu clave virtual
        </h2>
      </header>
      <div className="p-4">
        <div className="mt-2">
          <label htmlFor="username" className="block text-sm">
            Email:
          </label>
          <input
            type="text"
            id="username"
            className="w-full border border-neutral-300 rounded-md p-1"
            name="email"
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
            name="password"
            className="w-full border border-neutral-300 rounded-md p-1"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="block text-sm mt-4">
            Confirma tu contraseña:
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            className="w-full border border-neutral-300 rounded-md p-1"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
      </div>
      <footer className="p-4 rounded-b-md">
        <button className="bg-red-600 text-white rounded-md p-2 w-full">
          Registrarse
        </button>
        <div className="flex justify-center mt-4 px-2">
          <a
            href="/login"
            className="text-xs font-light hover:underline decoration-gray-500"
          >
            Ya tienes cuenta? Inicia Sesion
          </a>
        </div>
      </footer>
    </form>
  );
}

export default Register;
