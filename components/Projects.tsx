import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    interface ProjectType {
      id: string,
      name: string,
      disrciption: string,
      status: string,
      client: string,
    }
  const data: ProjectType[] = [
    {
      id: "1",
      name: "project47",
      disrciption: "this is very confidential",
      status: "pending",
      client: "jcob",
    },
    {
      id: "2",
      name: "project121",
      disrciption: "this is the top most  confidential",
      status: "started",
      client: "jhon",
    },
    {
      id: "3",
      name: "project47",
      disrciption: "this is very confidential",
      status: "pending",
      client: "jcob",
    },
    {
      id: "4",
      name: "project121",
      disrciption: "this is the top most  confidential",
      status: "started",
      client: "jhon",
    },
    {
      id: "5",
      name: "project47",
      disrciption: "this is very confidential",
      status: "pending",
      client: "jcob",
    },
 
  ];
  return (
    <div className=" grid grid-cols-2 gap-4 ">
      {(data && data.length > 0) ? data.map((project) => (
        <ProjectCard project={project} key={project.id} />
      )):(<div>No Project avaiable </div>)}
    </div>
  );
};

export default Projects;
