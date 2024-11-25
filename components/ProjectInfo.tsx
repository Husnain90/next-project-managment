"use client";

import { GET_PROJECT } from "@/Query/project";
import { useQuery } from "@apollo/client";
import React from "react";

const data1 = {
  name: "ppppppppppp",
  discription: "oooooooo",
  status: "sdsd",
  client: {
    name: "kkkkkkk",
    emial: "sssssss@ssss",
    phone: "22222",
  },
};
interface project {
  id: string;
  name: string;
  status:string;
  description:string;
  client:{
    id :string 
    name :string 
    email:string
    phone :string
  }
}
interface QueryResult {
    project:project
}
const ProjectInfo = ({ id }: { id: string }) => {
  const { data }  = useQuery<QueryResult>(GET_PROJECT, {
    variables: {
      id,
    },
  });
  console.log(data);
  return (
    <div className="border-2 mx-20 my-7 rounded-md">
      <div className="flex flex-col mx-9 mt-4 gap-3">
        <div>
          <p className="text-black font-bold text-3xl">{data?.project.name}</p>
          <p className="text-lg  mt-4">{data?.project.description}</p>
        </div>
        <div>
          <p className="text-black font-bold text-lg">Project status</p>
          <p className="text-lg  mt-2">{data?.project.status}</p>
        </div>
        <div>
          <p className="font-bold test-lg">Client Info</p>
          <p>{data?.project.client.name}</p>
          <p>{data?.project.client.email}</p>
          <p>{data?.project.client.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
