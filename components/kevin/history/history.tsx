import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

interface HistoryProps {
  date: string;
  title: string;
  role: string;
  location: string;
  description: string[];
}

const History: React.FC<HistoryProps> = ({
  date,
  title,
  role,
  location,
  description,
}) => {
  return (
    <div className="flex">
      <div className="w-1/5">
        <div className="pt-8 text-sm text-gray-500">{date}</div>
      </div>

      <div className="w-4/5 p-8 rounded-lg opacity-80 hover:bg-gray-100 hover:opacity-100 transition duration-300 dark:hover:bg-carddark">
        <div className="text-lg font-semibold text-black dark:text-carrigreen">
          {title}
        </div>
        <div className="flex items-center text-base text-carrigreen pt-2 mb-4">
          <FontAwesomeIcon
            className="mr-2 text-carrigreen w-3"
            icon={faUserTie}
          />
          {role}&nbsp;at&nbsp;{location}
        </div>
        {description.map((detail, index) => (
          <div
            className="pt-1 text-sm text-gray-600 dark:text-white"
            key={index}
          >
            {detail}
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
