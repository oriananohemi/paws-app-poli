export default function Procedures() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4f lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-indigo-400">
          Procedimientos
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
              htmlFor="condition"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Afección
            </label>
            <div className="mt-2">
              <input
                id="condition"
                name="condition"
                type="text"
                placeholder="Dermatitis"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="exam"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Examen
            </label>
            <div className="mt-2">
              <input
                id="examen"
                name="examen"
                type="text"
                placeholder="revisión medica"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="results"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Resultados
            </label>
            <div className="mt-2">
              <input
                id="results"
                name="results"
                type="text"
                placeholder=""
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="recos"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Recomendaciones
            </label>
            <div className="mt-2">
              <input
                id="recos"
                name="recos"
                type="text"
                placeholder="baños semanales"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Fecha
            </label>
            <div className="mt-2">
              <input
                id="date"
                name="date"
                type="date"
                placeholder=""
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
              />
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
