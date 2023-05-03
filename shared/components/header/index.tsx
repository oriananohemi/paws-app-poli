"use client";

import Router from "next/router";

const deleteToken = () => {
  sessionStorage.clear();
  Router.push("/login");
};

export default function Header() {
  const userLogged =
    typeof window !== "undefined" ? window.sessionStorage.getItem("at") : false;

  return (
    <div className="flex justify-between px-6 py-2 lg:px-8">
      <img className="h-15 w-auto" src="logo.jpg" alt="Paws App" />
      {userLogged && (
        <button
          onClick={deleteToken}
          className="mt-5 text-center text-1xl leading-9 tracking-tight text-indigo-400"
        >
          Cerrar sesión
        </button>
      )}
    </div>
  );
}
