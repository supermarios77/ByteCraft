import React from "react";

import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-8 max-w-7xl mx-auto border-b border-white/5">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center font-black text-xl">
          B
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Bytecraft</h1>
      </div>

      <nav className="hidden md:flex items-center space-x-10">
        {["Products", "Services", "About"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-200 font-medium text-[15px] relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 transition-all duration-200 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      <Button className="bg-white text-black hover:bg-gray-100 font-semibold px-6 rounded-full transition-all duration-200">
        Get in Touch
      </Button>
    </header>
  );
};

export default Navbar;
