"use client";
import { ADD_CLIENT } from "@/mutations/clientMutations";
import { GET_CLIENTS } from "@/Query/client";
import { useMutation } from "@apollo/client";
import React, { useState } from "react";

interface addClientResponse {
  addClient: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
}
interface ClientsData {
  clients: {
    id: string;
    name: string;
    email: string;
    phone: string;
  }[]
}
const AddClientModal = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const handleOpenModal = () => {
    setIsModelOpen(true);
  };
  const handleCloseModal = () => {
    setIsModelOpen(false);
  };
  const [addClient] = useMutation<addClientResponse>(ADD_CLIENT, {
    update(cache, resposne) {
      const addClient = resposne.data?.addClient;
      const existingClients = cache.readQuery<ClientsData>({query :GET_CLIENTS})
      if(existingClients && addClient ){
        cache.writeQuery({
          query:GET_CLIENTS,
          data:{
            
            clients:[...existingClients.clients ,addClient]
          }
        })
      }
    },
  });
  const handleSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, phone);
    try {
      const resposne = await addClient({
        variables: { name, email, phone },
      });
      // console.log(resposne.data?.addClient.email);
      if (resposne.data) {
        handleCloseModal();
      }
    } catch (err) {
      console.log(err);
      alert("Error in the creating client");
    }
  };

  return (
    <>
      <button
        className="bg-slate-700 text-white  w-[200px] h-[40px] rounded-md"
        onClick={handleOpenModal}
      >
        Add Client
      </button>
      {isModelOpen && (
        <div className="bg-black fixed border-2  inset-0  bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[400px] rounded-md h-[300px]  relative">
            <button
              className="absolute right-2 top-2"
              onClick={handleCloseModal}
            >
              X
            </button>

            <div>
              <p className="mt-4 items-center font-bold text-lg flex justify-center ">
                Add Client
              </p>
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmission}>
              <input
                type="text"
                placeholder="name"
                className=" h-10  mx-3 "
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="email"
                placeholder="email"
                className=" h-10 mx-3"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="h-10 mx-3"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <button className="bg-black text-white  rounded-md mx-10 h-10">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddClientModal;
