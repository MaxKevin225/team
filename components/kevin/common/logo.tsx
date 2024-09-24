import React from "react";
import Image from "next/image"; // Import Next.js Image component
import Link from "next/link"; // Import Next.js Link component for internal routing
import INFO from "../../../data/user";

interface LogoProps {
  width: number;
  link?: boolean; // Optional property
}

const Logo: React.FC<LogoProps> = ({ width, link = true }) => {
  const imageElement = (
    <Image
      src={String(INFO.main.logo)}
      alt="logo"
      className="rounded-full"
      width={width}
      height={width} // Set height same as width to maintain aspect ratio
      quality={100} // Optionally set quality for the image (0-100)
      priority // Optionally set priority to preload the image
    />
  );

  return (
    <>
      {link ? (
        <Link href="/kevin" passHref>
          <div>{imageElement}</div>
        </Link>
      ) : (
        imageElement
      )}
    </>
  );
};

export default Logo;
