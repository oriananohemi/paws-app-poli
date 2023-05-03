export default function Shower() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4f lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-indigo-400">
          Baño
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              htmlFor="shampoo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Champu
            </label>
            <div className="mt-2">
              <input
                id="shampoo"
                name="shampoo"
                type="text"
                placeholder="tu shampoo de confianza"
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
              htmlFor="hairstyle"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Cepillado
            </label>
            <div className="mt-2">
              <input
                id="hairstyle"
                name="hairstyle"
                type="text"
                placeholder="cepillado"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="calendar"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Calendario
            </label>
            <div className="mt-2">
              <input
                id="calendar"
                name="calendar"
                type="text"
                placeholder="2023/02/01"
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
