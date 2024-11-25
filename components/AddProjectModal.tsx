"use client";
import { ADD_PROJECT } from "@/mutations/projectMutations";
import { GET_CLIENTS } from "@/Query/client";
import { GET_PROJECT, GET_PROJECTS } from "@/Query/project";
import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";

interface ClientData {
  clients: {
    id: string;
    name: string;
    email: string;
    phone: string;
  }[];
}
interface AddProjectResponse {
  addProject: {
    id: string;
    name: string;
    descrioption: string;
    status: string;
  };
}
interface ProjectData {
  projects: {
    id: string;
    name: string;
    descrioption: string;
    status: string;
  }[];
}

const AddProjectModal = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [clientId, setClientId] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const [addProject, { error }] = useMutation<AddProjectResponse>(ADD_PROJECT, {
    update(cache, response) {
      const newProject = response.data?.addProject;
      const existingProject = cache.readQuery<ProjectData>({
        query: GET_PROJECTS,
      });
      console.log("exis", existingProject);
      console.log("new projet", newProject);
      if (existingProject && newProject) {
        cache.writeQuery({
          query: GET_PROJECTS,
          data: {
            projects: [...existingProject.projects, newProject],
          },
        });
      }
    },
  });
  console.log("err", error);
  const { data } = useQuery<ClientData>(GET_CLIENTS);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModelOpen(true);
  };
  const handleCloseModal = () => {
    setIsModelOpen(false);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await addProject({
        variables: { name, description, status, clientId },
      });

      if (response.data) {
        handleCloseModal();
      }
    } catch (err) {
      alert("Project is not added");
    }
  };

  return (
    <>
      <button
        className="bg-slate-950 text-white  w-[200px] h-[40px] rounded-md"
        onClick={handleOpenModal}
      >
        Add Project
      </button>
      {isModelOpen && (
        <div className="bg-black fixed border-2  inset-0  bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[400px] rounded-md   relative">
            <button
              className="absolute right-2 top-2"
              onClick={handleCloseModal}
            >
              X
            </button>

            <div>
              <p className="mt-4 items-center font-bold text-lg flex justify-center ">
                Add Project
              </p>
            </div>

            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <p className=" mx-3">name</p>
              <input
                type="text"
                placeholder="name"
                className=" h-10  mx-3 "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className=" mx-3">Details</p>
              <input
                type="text"
                placeholder="details"
                className=" h-10 mx-3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <p className=" mx-3">Status</p>
              <select
                className="h-10 border border-gray-300 rounded-md mx-3 p-2"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="new">Not Started</option>
                <option value="progress"> In progess</option>
                <option value="completed">Completed</option>
              </select>
              <p className=" mx-3">Client</p>
              <select
                className="h-10 border border-gray-300 rounded-md mx-3 p-2"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
              >
                <option value=" ">Select Client</option>
                {data?.clients.map((client) => (
                  <option value={client.id} key={client.id}>
                    {client.name}
                  </option>
                ))}
              </select>
              <button className="bg-black text-white  rounded-md mx-10 h-10 mb-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProjectModal;
