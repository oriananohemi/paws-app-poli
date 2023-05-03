import Link from "next/link";

export default function Presentation() {
  return (
    <>
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
    </>
  );
}
