"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { useQuery } from "@apollo/client";
import { GET_PROJECT, GET_PROJECTS } from "@/Query/project";

const Projects = () => {
  interface ProjectType {
    projects: {
      id: string;
      name: string;
      disrciption: string;
      status: string;
      client: string;
    }[];
  }

  const { data } = useQuery<ProjectType>(GET_PROJECTS);
  console.log(data);
  return (
    <div className=" grid grid-cols-2 gap-4 ">
      {data?.projects && data.projects.length > 0 ? (
        data.projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))
      ) : (
        <div>There is not project avaiable</div>
      )}
    </div>
  );
};

export default Projects;
