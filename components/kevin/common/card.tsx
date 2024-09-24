import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core"; // Import IconProp for proper FontAwesome typing

interface CardProps {
  icon: IconProp; // Use IconProp for FontAwesome icons
  title: string;
  body: React.ReactNode; // Accept any JSX content as body, not just a string
}

const Card: React.FC<CardProps> = ({ icon, title, body }) => {
  return (
    <div className="bg-white rounded-xl border-2 border-gray-100 dark:bg-carddark dark:border-none">
      <div className="p-8 pb-2">
        <div className="flex items-center">
          <div className="text-lg text-tertiary">
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className="text-secondary text-base font-semibold pl-5">
            {title}
          </div>
        </div>
        <div className="pt-10 text-sm text-gray-600">
          <div>{body}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
