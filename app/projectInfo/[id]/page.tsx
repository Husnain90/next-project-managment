import ProjectInfo from "@/components/ProjectInfo";
import UpdateProject from "@/components/UpdateProject";
import React from "react";
interface Props {
  params: { id: string };
}
const projectInfo = ({params}: Props) => {
  const projectId =  params.id;
  return (
    <div>
      <ProjectInfo id={projectId} />
      <UpdateProject id={projectId}/>
    </div>
  );
};

export default projectInfo;
