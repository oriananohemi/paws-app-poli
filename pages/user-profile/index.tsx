import Link from "next/link";
import { useState } from "react";

export default function UserProfile() {
  const [data, setData] = useState({
    name: "Ana María Martinez",
    userName: "anamaria",
    cellphone: "300-0000000",
    email: "ana.martinez@prueba.com",
    password: "prueba1234",
    picture: "",
    pets: [
      {
        name: "Ramón",
      },
    ],
  });
  const { pets } = data;

  return (
    <div className="bg-transparent w-50 w-full min-h-full">
      <div className="relative bg-[url('https://static-cse.canva.com/blob/965587/1600w-SQm48mQbOUc.jpg')] h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l">
        <div className="rounded overflow-hidden shadow-lg max-w-lg px-6 py-4 bg-white absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 ">
          <p className="text-indigo-400 text-base">{data.name}</p>
          <p className="text-indigo-400 text-base">{data.email}</p>
          <p className="text-indigo-400 text-base">{data.cellphone}</p>
          <Link
            href="/edit-user-profile"
            className="leading-6 text-slate-400 hover:text-slate-500 ml-20"
          >
            Editar
          </Link>
        </div>
      </div>
      {pets.length > 0 && (
        <>
          <h2 className="text-center text-2xl font-semibold leading-9 tracking-tight text-indigo-400 py-4 mt-28">
            Mascotas
          </h2>

          <div className="w-full lg:max-w-full lg:flex">
            <Link
              href="/pet-profile"
              className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex justify-between leading-normal"
            >
              <img className="flex-initial" src="" alt="" />
              <div className="flex-initial">
                <h3 className="text-center text-1xl font-semibold tracking-tight">
                  Ramón
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
        </>
      )}
    </div>
  );
}
