import React from "react";
import { faBriefcase, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link"; // Import Next.js Link for internal/external routing

import Card from "../common/card";
import INFO from "../../../data/user";

const Contact: React.FC = () => {
  // Reusable classNames
  const linkClasses =
    "flex items-center p-4 w-full rounded-lg bg-white hover:bg-gray-100 transition duration-300 m-2 dark:bg-carddark dark:hover:bg-[#1B2731]";
  const iconClasses = "w-6 h-6";
  const textClasses = "ml-3 font-semibold text-gray-700 dark:text-carrigreen";
  const subtitleClasses = "ml-auto text-gray-500 text-sm";

  return (
    <div className="flex flex-col space-y-4">
      <Card
        icon={faBriefcase}
        title="Contact"
        body={
          <div className="space-y-4">
            {/* <Link href={INFO.socials.twitter} passHref>
              <div className={linkClasses}>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={`${iconClasses} text-blue-500`}
                />
                <div className={textClasses}>Twitter</div>
                <div className={subtitleClasses}>{INFO.socials.twitter}</div>
              </div>
            </Link> */}

            <Link href={INFO.socials.github} passHref>
              <div className={linkClasses}>
                <FontAwesomeIcon
                  icon={faGithub}
                  className={`${iconClasses} text-gray-700`}
                />
                <div className={textClasses}>Github</div>
                <div className={subtitleClasses}>{INFO.socials.github}</div>
              </div>
            </Link>

            {/* <Link href={INFO.socials.linkedin} passHref>
              <div className={linkClasses}>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={`${iconClasses} text-blue-600`}
                />
                <div className={textClasses}>Linkedin</div>
                <div className={subtitleClasses}>{INFO.socials.linkedin}</div>
              </div>
            </Link> */}

            <Link href={`mailto:${INFO.main.email}`} passHref>
              <div className={linkClasses}>
                <FontAwesomeIcon
                  icon={faMailBulk}
                  className={`${iconClasses} text-red-500`}
                />
                <div className={textClasses}>Mail</div>
                <div className={subtitleClasses}>{INFO.main.email}</div>
              </div>
            </Link>
          </div>
        }
      />
    </div>
  );
};

export default Contact;
