import { DarkThemeToggle } from "flowbite-react";
import React, { useState } from "react";

export const TopBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("#about");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu); 
    setShowMenu(false); 
  };

  return (
    <nav className="sticky top-0 z-30 shadow-[0_10px_20px_rgba(0,0,0,0.25)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.9)] bg-white px-[40px] py-[10px] dark:bg-gray-800 md:px-[80px] md:py-[40px]">
      <div className="flex justify-end space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse ">
        <DarkThemeToggle />
        <button
          data-collapse-toggle="navbar-cta"
          type="button"
          onClick={() => setShowMenu(!showMenu)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-cta"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <div
        className="hidden w-full items-center justify-center md:order-1 md:flex md:w-auto"
        id="navbar-cta"
      >
        <ul className="text-md mt-4 flex flex-col rounded-lg border  border-gray-100 p-4 font-medium  md:mt-0 md:flex-row md:space-x-8 md:border-0  md:p-0 rtl:space-x-reverse">
          <li>
            <a
              href="#about"
              onClick={() => handleMenuClick("#about")}
              className={`block rounded px-3 py-2  dark:hover:text-[#FF7C8E] md:p-0 md:hover:bg-transparent md:hover:text-[#FF7C8E] md:dark:hover:bg-transparent md:dark:hover:text-[#FF7C8E] ${
                activeMenu === "#about" ? "text-[#EF98A4]" : "text-gray-900 dark:text-white"
              }`}
              aria-current="page"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skill"
              onClick={() => handleMenuClick("#skill")}
              className={`block rounded px-3 py-2  dark:hover:text-[#FF7C8E] md:p-0 md:hover:bg-transparent md:hover:text-[#FF7C8E] md:dark:hover:bg-transparent md:dark:hover:text-[#FF7C8E] ${
                activeMenu === "#skill" ? "text-[#EF98A4]" : "text-gray-900 dark:text-white"
              }`}            >
              My skill
            </a>
          </li>
          <li>
            <a
              href="#work"
              onClick={() => handleMenuClick("#work")}
              className={`block rounded px-3 py-2  dark:hover:text-[#FF7C8E] md:p-0 md:hover:bg-transparent md:hover:text-[#FF7C8E] md:dark:hover:bg-transparent md:dark:hover:text-[#FF7C8E] ${
                activeMenu === "#work" ? "text-[#EF98A4]" : "text-gray-900 dark:text-white"
              }`}>
              My work
            </a>
          </li>
        </ul>
      </div>

      {showMenu && (
          <ul 
          className="bg-white dark:bg-gray-800 text-md shadow-lg absolute right-[10px] top-[50px] w-5/4 flex flex-col rounded-lg p-4 font-medium  md:mt-0 md:flex-row md:space-x-8 md:border-0  md:p-0 rtl:space-x-reverse"
          id="navbar-cta">
            <li>
              <a
                href="#about"
                onClick={() => handleMenuClick("#about")}
                className={`block rounded px-3 py-2  dark:hover:text-[#FF7C8E] md:p-0 md:hover:bg-transparent md:hover:text-[#FF7C8E] md:dark:hover:bg-transparent md:dark:hover:text-[#FF7C8E] ${
                  activeMenu === "#about" ? "text-[#EF98A4]" : "text-gray-900 dark:text-white"
                }`}
                aria-current="page"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skill"
                onClick={() => handleMenuClick("#skill")}
                className={`block rounded px-3 py-2  dark:hover:text-[#FF7C8E] md:p-0 md:hover:bg-transparent md:hover:text-[#FF7C8E] md:dark:hover:bg-transparent md:dark:hover:text-[#FF7C8E] ${
                  activeMenu === "#skill" ? "text-[#EF98A4]" : "text-gray-900 dark:text-white"
                }`}
              >
                My skill
              </a>
            </li>
            <li>
              <a
                href="#work"
                onClick={() => handleMenuClick("#work")}
                className={`block rounded px-3 py-2  dark:hover:text-[#FF7C8E] md:p-0 md:hover:bg-transparent md:hover:text-[#FF7C8E] md:dark:hover:bg-transparent md:dark:hover:text-[#FF7C8E] ${
                  activeMenu === "#work" ? "text-[#EF98A4]" : "text-gray-900 dark:text-white"
                }`}>
                My work
              </a>
            </li>
          </ul>
      )}
    </nav>
  );
};
