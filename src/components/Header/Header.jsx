import React, { useState } from "react";
import ThemeToggle from "../../theme/ThemeToggle";
import logo from "/logo.jpeg";
import { MoveRight, Menu, X } from "lucide-react";
import NavItems from "./NavItems";
import MenuItem from "./MenuItem";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Destop view */}
      {/* Logo : Both on desktop and moblie */}
      <div className="grid grid-cols-1 gap-3 justify-between items-center w-[90%] fixed top-2 left-1/2 transform -translate-x-1/2 z-50 rounded-2xl px-1">
        <div className="flex flex-row justify-between items-center">
          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt="Virendra Kumar"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>

          {/* Visible on desktop only */}
          <div className="hidden lg:flex flex-row gap-4 justify-center items-center">
            <div>
              <NavItems />
            </div>
            <div>
              <ThemeToggle />
            </div>
            <div>
              <a
               href="#connect"
                className="bg-gradient-to-br from-pink-500 to-violet-600 text-white text-lg outline-none
          hover:scale-105 hover:opacity-75 duration-200 ease-in-out flex flex-row gap-2 justify-center items-center px-3 py-1 rounded-lg"
              >
                Let's Connect <MoveRight />
              </a>
            </div>
          </div>

          {/* Mobile View */}

          <div className="lg:hidden flex gap-3">
            <div>
              <ThemeToggle />
            </div>
            <div>
              <button
                className="bg-neutral-300 dark:bg-gray-600 rounded-lg border-none outline-none px-1.5 py-1.5 justify-center items-center"
                onClick={handleMenuToggle}
              >
                {menuOpen ? (
                  <X className="text-gray-900 w-6 h-6 dark:text-gray-200" />
                ) : (
                  <Menu className="text-gray-900 w-6 h-6 dark:text-gray-200" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>{menuOpen ? <MenuItem /> : ""}</div>
      </div>
    </>
  );
}

export default Header;
