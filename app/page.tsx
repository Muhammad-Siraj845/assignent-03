import Link from "next/link";

export default function Homepage() {
  return (
    <div>
      <nav className="bg-black p-4 flex justify-around text-2xl">
        <Link href={'/About'} className="text-white  hover:text-blue-500">About</Link>
        <Link href={'/Footer'} className="text-white  hover:text-blue-500">Footer</Link>
        <Link href={'/Contact'} className="text-white  hover:text-blue-500">Contact</Link>
        <Link href={'Navbar'} className="text-white  hover:text-blue-500">Navbar</Link>

      </nav>
    </div>
  )
}