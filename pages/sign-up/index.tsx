import { useState, useEffect } from "react";
import Router from "next/router";

const signUp = () => {
  sessionStorage.setItem("at", "token de prueba");
  Router.push("/user-profile");
};

export default function SignUp() {
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        Router.push("/login");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [success]);
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-10 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-semibold leading-9 tracking-tight text-indigo-400">
            Regístrate
          </h2>
          <img className="mx-auto h-25 w-auto" src="sign-up.jpg" alt="Perro" />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="email"
                  placeholder="Karen"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="cellphone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Celular
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="cellphone"
                  name="cellphone"
                  type="text"
                  placeholder="300 0000000"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Correo
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="tucorreo@email.com"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="***********"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={() => {
                  setSuccess(true);
                }}
                type="button"
                className="flex w-full justify-center rounded-md bg-rose-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-300"
              >
                Registrar
              </button>
            </div>
          </form>
          <div className="mt-10 text-center text-sm">
            <a
              href="/login"
              className="font-semibold leading-6 text-indigo-400 hover:text-indigo-500"
            >
              ¿Ya tienes cuenta?. Inicia sesión
            </a>
          </div>
        </div>
      </div>

      {success && (
        <div
          className="z-10 absolute inset-x-0 top-0 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Bienvenido a esta gran comunidad</p>
              <p className="text-sm">
                Enviamos un email de confirmación, ya puedes iniciar sesión
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
