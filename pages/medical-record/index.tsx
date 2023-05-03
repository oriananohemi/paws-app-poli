import Link from "next/link";

export default function Edit() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4f lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-indigo-400">
          Registro medico
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="vet"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Veterinario
            </label>
            <div className="mt-2">
              <input
                id="vet"
                name="vet"
                type="text"
                placeholder="tu veterinario"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="allergies"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Alergias
            </label>
            <div className="mt-2">
              <input
                id="allergies"
                name="allergies"
                type="text"
                placeholder="Dermatitis"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="vaccines"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Vacunas
            </label>
            <div className="mt-2">
              <input
                id="vaccines"
                name="vaccines"
                type="text"
                placeholder="Rabia, KC, ..."
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="external"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Desparasitante Externo
            </label>
            <div className="mt-2">
              <input
                id="external"
                name="external"
                type="text"
                placeholder="Desparasitante externo"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="internal"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Desparasitante Interno
            </label>
            <div className="mt-2">
              <input
                id="internal"
                name="internal"
                type="text"
                placeholder="Desparasitante interno"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="vaccines"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Procedimientos
            </label>
            <div className="mt-2">
              <Link
                href="/procedures"
                className="font-semibold text-indigo-400 hover:text-indigo-500"
              >
                Procedimientos
              </Link>
            </div>
          </div>

          <div>
            <button
              /*               onClick={saveProfile} */
              type="button"
              className="flex w-full justify-center rounded-md bg-rose-300 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-300"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
