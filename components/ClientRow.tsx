"use client";
import { DELETE_CLIENT } from "@/mutations/clientMutations";
import { GET_CLIENTS } from "@/Query/client";
import { GET_PROJECT, GET_PROJECTS } from "@/Query/project";
import { useMutation } from "@apollo/client";
import React from "react";
type clientType = {
  id:string
  name: string;
  email: string;
  phone: string;
};

interface PropType {
  client: clientType;
}
const ClientRow: React.FC<PropType> = ({ client }) => {
  const id = client.id
   const [deleteClient] = useMutation(DELETE_CLIENT);
  const handleDelete =async()=>{
    try{
    const res=  await deleteClient({
        variables:{
          id:client.id
        },refetchQueries:[{query:GET_CLIENTS},{query:GET_PROJECTS}]
      })
      console.log("got deleete",res.data)
    

    }catch(err){
      alert("Error in deleting")
    }
  
  
   console.log("sdas")
  }
  return (
  
      <tr>
        <td className="px-4 py-2">{client.name}</td>
        <td className="px-4 py-2">{client.email}</td>
        <td className="px-4 py-2" >{client.phone}</td>
        <td className="px-4 py-2">
          <button className="bg-red-600 px-[50px] text-white rounded-md" onClick={handleDelete}>Delete</button>
        </td>
        
      </tr>
  
  );
};

export default ClientRow;
