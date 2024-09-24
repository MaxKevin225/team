import React from "react";
import Link from "next/link"; // Import Next.js Link for internal routing

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between py-6 mt-12">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
        <ul className="flex space-x-6">
          <li className="font-bold text-sm">
            <Link href="/kevin" className="text-secondary hover:text-link">
              Home
            </Link>
          </li>
          <li className="font-bold text-sm">
            <Link
              href="/kevin/about"
              className="text-secondary hover:text-link"
            >
              About
            </Link>
          </li>
          <li className="font-bold text-sm">
            <Link
              href="/kevin/history"
              className="text-secondary hover:text-link"
            >
              History
            </Link>
          </li>
          <li className="font-bold text-sm">
            <Link
              href="/kevin/projects"
              className="text-secondary hover:text-link"
            >
              Projects
            </Link>
          </li>
          <li className="font-bold text-sm">
            <Link
              href="/kevin/contact"
              className="text-secondary hover:text-link"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="w-full md:w-1/2 text-sm text-right text-tertiary">
        © 2019 Kevin Lim. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
