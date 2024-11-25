import Link from 'next/link'
import React from 'react'
interface Ptype {
  id: string;
  name: string;
  disrciption: string;
  status: string;
  client: string;
}
interface ProjectCardProps {
  project :Ptype
}
const ProjectCard:React.FC<ProjectCardProps> = ({project}) => {
  return (
    <div className="border-2 rounded-md flex  flex-col py-5">
      <div className="m-3">
        <div className="flex flex-row justify-between ">
          <p>{project.name}</p>
          <Link
            href={`/projectInfo/${project.id}`}
            className="bg-green-800 text-white px-2 rounded-xl"
          >
            View
          </Link>
        </div>
        <div>
          <p>status :{project.status}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard
