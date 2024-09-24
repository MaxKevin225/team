import React from "react";
import Link from "next/link"; // Import Next.js Link for internal routing
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../../data/user";

const Socials: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Twitter */}
      {/* <div className="flex pb-5">
        <Link href={INFO.socials.twitter} passHref>
          <div className="flex items-center">
            <div className="text-lg text-secondary">
              <FontAwesomeIcon className="w-3" icon={faTwitter} />
            </div>
            <div className="text-secondary pl-7 font-semibold text-sm">
              Follow on Twitter
            </div>
          </div>
        </Link>
      </div> */}

      {/* GitHub */}
      <div className="flex pb-5">
        <Link href={INFO.socials.github} passHref>
          <div className="flex items-center">
            <div className="text-lg text-secondary">
              <FontAwesomeIcon className="w-3" icon={faGithub} />
            </div>
            <div className="text-secondary pl-7 font-semibold text-sm">
              Follow on GitHub
            </div>
          </div>
        </Link>
      </div>

      {/* LinkedIn */}
      <div className="flex pb-5">
        <Link href={INFO.socials.linkedin} passHref>
          <div className="flex items-center">
            <div className="text-lg text-secondary">
              <FontAwesomeIcon className="w-3" icon={faLinkedin} />
            </div>
            <div className="text-secondary pl-7 font-semibold text-sm">
              Follow on LinkedIn
            </div>
          </div>
        </Link>
      </div>

      {/* About Us - Internal link
      <div className="flex pb-5">
        <Link href="/about" passHref>
          <div className="flex items-center">
            <div className="text-lg text-secondary">
              <FontAwesomeIcon className="w-3" icon={faInstagram} />
            </div>
            <div className="text-secondary pl-7 font-semibold text-sm">
              About Us
            </div>
          </div>
        </Link>
      </div> */}

      {/* Email */}
      <div className="mt-5 pt-5 border-t-3 border-gray-200">
        <hr className="border-3"></hr>
        <div className="pt-5">
          <Link href={`mailto:${INFO.main.email}`} passHref>
            <div className="flex items-center">
              <div className="text-lg text-secondary">
                <FontAwesomeIcon className="w-3" icon={faEnvelope} />
              </div>

              <div className="text-secondary pl-7 font-semibold text-sm">
                {INFO.main.email}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Socials;
