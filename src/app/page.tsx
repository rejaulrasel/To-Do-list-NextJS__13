import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className='text-5xl'>ToDos</h1>
        <Link className="text-5xl border border-slate-100 tex p-3 hover:bg-slate-700 focus-within:bg-slate-700 outline:none" href='/new'>New</Link>
      </header>
    </>
  )
}