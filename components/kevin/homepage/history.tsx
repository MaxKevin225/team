import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

interface HistoryProps {
  title: string;
  description: string[];
  date: string;
  location: string;
  role: string;
}

const History: React.FC<HistoryProps> = ({
  title,
  description,
  date,
  location,
  role,
}) => {
  return (
    <div className="w-full md:w-4/5 rounded-lg bg-opacity-80 hover:bg-gray-100 transition duration-300 dark:hover:bg-carddark">
      <div className="p-6">
        <div className="text-sm text-tertiary mb-4">
          |&nbsp;&nbsp;&nbsp;{date}
        </div>
        <div className="text-lg font-bold text-primary dark:text-carrigreen">
          {title}
        </div>
        <div className="flex items-center text-base text-gray-700 pt-2 mb-4 dark:text-carrigreen">
          <FontAwesomeIcon
            className="text-green-500 mr-2 w-3"
            icon={faUserTie}
          />
          {role} |&nbsp;&nbsp;&nbsp;{location}
        </div>
        {description.map((detail, index) => (
          <div className="text-sm text-secondary leading-relaxed" key={index}>
            {detail}
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
