import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link"; // Import Next.js Link

interface ProjectProps {
  logo: string;
  title: string;
  description: string;
  linkText: string;
  link: string;
}

const Project: React.FC<ProjectProps> = ({
  logo,
  title,
  description,
  linkText,
  link,
}) => {
  return (
    <div className="bg-white rounded-xl opacity-80 hover:bg-gray-100 hover:opacity-100 transition-all h-full p-6 relative dark:bg-carddark">
      <Link href={link} target="_blank" rel="noreferrer">
        <div className="mb-4 w-full h-48 relative">
          {" "}
          {/* Set a fixed height for the image container */}
          <Image
            src={String(logo)}
            alt="logo"
            layout="fill"
            objectFit="contain"
            className="rounded-t-xl" // Optional: add border radius to the top
          />
        </div>
        <div className="text-lg font-bold text-primary mb-2 dark:text-carrigreen">
          {title}
        </div>{" "}
        {/* Reduced margin for better spacing */}
        <div className="text-sm text-secondary mb-4">{description}</div>
        <div className="flex text-secondary text-xs">
          <FontAwesomeIcon
            icon={faLink}
            className="w-3 dark:text-carrigreen"
            size="lg"
          />
          <div className="ml-2 font-bold dark:text-carrigreen">{linkText}</div>{" "}
          {/* Reduced margin for better spacing */}
        </div>
      </Link>
    </div>
  );
};

export default Project;
