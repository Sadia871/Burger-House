import Link from 'next/link';
export function Header() {
  return (
    <header className="bg-amber-300 p-4 shadow-md">
      <div className="flex items-center justify-between font-serif">
      <img src="/logo.png" alt="Restaurant Logo" className="h-10 w-30 rounded-full" />
      <p className="font-bold text-3xl text-center font-serif  ">Welcome To Our Restaurant!</p>
    <nav className="navbar bg-amber-300 p-1 rounded">
          <ul className="flex space-x-5 bg-amber-300">
            <li>
              <Link href="/" className="p-2 text-2xl text-black hover:text-amber-50 hover:underline transition duration-300  font-bold ">Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="p-2 text-2xl text-black hover:text-amber-50 hover:underline transition duration-300 font-bold">Menu
              </Link>
            </li>
            <li>
              <Link href="/about" className= "p-2 text-2xl text-black hover:text-amber-50 hover:underline transition duration-300 font-bold">About
              </Link>
            </li>
            <li>
              <Link href="/contact" className= "text-2xl p-2 text-black hover:text-amber-50 hover:underline transition duration-300 font-bold">Contact
              </Link>
            </li>
          </ul>
        </nav>
        </div>
      {/* </div> */}
    </header>
  );
}
