import React from "react";
import Link from "next/link"; // Import Link from next/link

interface NavBarProps {
  active: string;
}

const NavBar: React.FC<NavBarProps> = ({ active }) => {
  return (
    <div className="flex justify-center items-center">
      <nav className="fixed top-7 z-50">
        <div className="w-96 h-10 bg-white shadow-md rounded-full dark:bg-carddark">
          <ul className="flex justify-between items-center px-6 py-2">
            <li>
              <Link
                href="/kevin"
                className="hover:text-link transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/kevin/about"
                className="hover:text-link transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/kevin/history"
                className="hover:text-link transition-colors duration-300"
              >
                History
              </Link>
            </li>
            <li>
              <Link
                href="/kevin/projects"
                className="hover:text-link transition-colors duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/kevin/contact"
                className="hover:text-link transition-colors duration-300"
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
