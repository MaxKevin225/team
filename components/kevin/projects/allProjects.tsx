import React from "react";
import Project from "./project";
import INFO from "../../../data/user";

interface ProjectData {
  logo: string;
  title: string;
  description: string;
  linkText: string;
  link: string;
}

const AllProjects: React.FC = () => {
  return (
    <div className="flex flex-wrap py-8 -mx-8">
      {INFO.projects.map((project: ProjectData, index: number) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4">
          <Project
            logo={project.logo}
            title={project.title}
            description={project.description}
            linkText={project.linkText}
            link={project.link}
          />
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
