"use client";
import { UPDATE_PROJECT } from "@/mutations/projectMutations";
import { GET_PROJECT } from "@/Query/project";
import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";

interface project {
  id: string;
  name: string;
  status: string;
  description: string;
  client: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
}
interface QueryResult {
  project: project;
}

const UpdateProject = ({ id }: { id: string }) => {
  const { data } = useQuery<QueryResult>(GET_PROJECT, {
    variables: {
      id,
    },
  });
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [updateProject] = useMutation<QueryResult>(UPDATE_PROJECT, {
    refetchQueries: [{ query: GET_PROJECT, variables: { id: id } }],
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProject({
      variables: {
        id: id,
        name: name,
        description: description,
        status: status,
      },
    });
  };
  return (
    <div className="border-2 mx-20 my-7 p-5">
      <div className="flex flex-col ">
        <p className="text-lg">Update Data</p>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-60 border-2 h-8 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="w-60 border-2 h-8 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select
            className=" border border-gray-300 rounded-md w-60 h-8"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option value="new">Not Started</option>
            <option value="progress"> In progess</option>
            <option value="completed">Completed</option>
          </select>
          <button className="bg-black text-white rounded-md w-36">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProject;
