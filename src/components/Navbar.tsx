import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-screen bg-gray-500">
      <div className="h-[10vh] w-[90%] flex flex-col md:flex-row justify-between items-center m-auto">
        <Link href="/" className="text-white text-2xl">
          Home
        </Link>
        <Link href="/about" className="text-white text-2xl">
          About
        </Link>
        <Link href="/contact" className="text-white text-2xl">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
