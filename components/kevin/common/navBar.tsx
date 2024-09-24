import React, { useState } from "react";
import Link from "next/link";

interface NavBarProps {
  initialActive: string;
}

const NavBar: React.FC<NavBarProps> = ({ initialActive }) => {
  const [active, setActive] = useState(initialActive);

  const handleClick = (item: string) => {
    setActive(item);
  };

  return (
    <div className="flex justify-center items-center">
      <nav className="fixed top-7 z-50">
        <div className="w-96 h-10 bg-white shadow-md rounded-full dark:bg-carddark">
          <ul className="flex justify-between items-center px-6 py-2">
            <li
              className={
                active === "home"
                  ? "font-bold text-primary"
                  : "font-bold text-secondary"
              }
            >
              <Link
                href="/kevin"
                className="hover:text-link transition-colors duration-300"
                onClick={() => handleClick("home")}
              >
                Home
              </Link>
            </li>
            <li
              className={
                active === "about"
                  ? "font-bold text-primary"
                  : "font-bold text-secondary"
              }
            >
              <Link
                href="/kevin/about"
                className="hover:text-link transition-colors duration-300"
                onClick={() => handleClick("about")}
              >
                About
              </Link>
            </li>
            <li
              className={
                active === "history"
                  ? "font-bold text-primary"
                  : "font-bold text-secondary"
              }
            >
              <Link
                href="/kevin/history"
                className="hover:text-link transition-colors duration-300"
                onClick={() => handleClick("history")}
              >
                History
              </Link>
            </li>
            <li
              className={
                active === "projects"
                  ? "font-bold text-primary"
                  : "font-bold text-secondary"
              }
            >
              <Link
                href="/kevin/projects"
                className="hover:text-link transition-colors duration-300"
                onClick={() => handleClick("projects")}
              >
                Projects
              </Link>
            </li>
            <li
              className={
                active === "contact"
                  ? "font-bold text-primary"
                  : "font-bold text-secondary"
              }
            >
              <Link
                href="/kevin/contact"
                className="hover:text-link transition-colors duration-300"
                onClick={() => handleClick("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
