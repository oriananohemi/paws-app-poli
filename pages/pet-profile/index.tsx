import Link from "next/link";
import { useState } from "react";

export default function PetProfile() {
  const [data, setData] = useState({
    name: "Ramón",
    description: "blanco de pelo largo",
    weight: 5,
  });

  return (
    <div className="bg-transparent w-50 w-full min-h-full">
      <div className="relative bg-[url('https://png.pngtree.com/background/20210716/original/pngtree-cute-dog-tiled-background-mixed-colors-picture-image_1349643.jpg')] h-48 flex-none bg-cover rounded-t">
        <div className="rounded overflow-hidden shadow-lg max-w-lg px-6 py-4 bg-white absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 ">
          <p className="text-indigo-400 text-base">{data.name}</p>
          <p className="text-indigo-400 text-base">{data.description}</p>
          <p className="text-indigo-400 text-base">{data.weight}</p>
          <Link
            href="/edit-pet-profile"
            className="leading-6 text-slate-400 hover:text-slate-500 ml-20"
          >
            Editar
          </Link>
        </div>
      </div>
      <div className="rounded overflow-hidden shadow-lg mt-28">
        <div className="w-full ml-10">
          <Link
            href="/procedures"
            className="max-w-sm my-4 border-r border-b border-l border-gray-400 bg-slate-100 rounded-b p-4 flex justify-between leading-normal"
          >
            <div className="flex-initial">
              <h3 className=" text-1xl font-semibold tracking-tight">
                Procedimientos
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 flex-initial"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
          <Link
            href="/nutrition"
            className="max-w-sm my-4 border-r border-b border-l border-gray-400  bg-slate-100 rounded-b p-4 flex justify-between leading-normal"
          >
            <div className="flex-initial">
              <h3 className="text-1xl font-semibold tracking-tight">
                Alimentación
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 flex-initial"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
          <Link
            href="/shower"
            className="max-w-sm my-4 border-r border-b border-l border-gray-400 bg-slate-100 rounded-b  p-4 flex justify-between leading-normal"
          >
            <div className="flex-initial">
              <h3 className=" text-1xl font-semibold tracking-tight">Baño</h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 flex-initial"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
          <Link
            href="/medical-record"
            className="max-w-sm my-4 border-r border-b border-l border-gray-400 bg-slate-100 rounded-b p-4 flex justify-between leading-normal"
          >
            <div className="flex-initial">
              <h3 className=" text-1xl font-semibold tracking-tight">
                Registro medico
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 flex-initial"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
          <Link
            href="/calendar"
            className="max-w-sm my-4 border-r border-b border-l border-gray-400 bg-slate-100 rounded-b p-4 flex justify-between leading-normal"
          >
            <div className="flex-initial">
              <h3 className=" text-1xl font-semibold tracking-tight">
                Calendario
              </h3>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 flex-initial"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
