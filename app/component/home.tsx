export function Header() {
  return (
    <header className="bg-amber-300 p-4 shadow-md">
      <div className="flex items-center justify-between font-serif">
      <img src="/logo.png" alt="Restaurant Logo" className="h-10 w-30 rounded-full" />
      <p className="font-bold text-3xl text-center font-serif  ">Welcome To Our Restaurant!</p>
    <nav className="navbar bg-amber-300 p-1 rounded">
          <ul className="flex space-x-5 bg-amber-300">
            <li>
              <a href="/" className="p-2 text-2xl text-black hover:text-amber-50 hover:underline transition duration-300  font-bold ">Home</a>
            </li>
            <li>
              <a href="/menu" className="p-2 text-2xl text-black hover:text-amber-50 hover:underline transition duration-300 font-bold">Menu</a>
            </li>
            <li>
              <a href="/about" className= "p-2 text-2xl text-black hover:text-amber-50 hover:underline transition duration-300 font-bold">About</a>
            </li>
            <li>
              <a href="/contact" className= "text-2xl p-2 text-black hover:text-amber-50 hover:underline transition duration-300 font-bold">Contact</a>
            </li>
          </ul>
        </nav>
        </div>
      {/* </div> */}
    </header>
  );
}
