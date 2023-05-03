import Link from "next/link";
import Router from "next/router";

const saveToken = () => {
  sessionStorage.setItem("at", "token de prueba");
  Router.push("/user-profile");
};

export default function Login() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4f lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-indigo-400">
            Inicia sesión
          </h2>
          <img
            className="mt-5 mx-auto h-25 w-auto"
            src="login.jpg"
            alt="Mascotas"
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
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
                onClick={saveToken}
                type="button"
                className="flex w-full justify-center rounded-md bg-rose-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-300"
              >
                Ingresar
              </button>
            </div>
          </form>
          <div className="mt-6 text-sm text-center">
            <Link
              href="#"
              className="font-semibold text-indigo-400 hover:text-indigo-500"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          <div className="mt-10 text-center text-sm">
            <Link
              href="/sign-up"
              className="font-semibold leading-6 text-indigo-400 hover:text-indigo-500"
            >
              ¿No tienes cuenta?. Registrate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
