"use client";
import React from "react";
type clientType = {
  name: string;
  email: string;
  phoneNumber: string;
};

interface PropType {
  client: clientType;
}
const ClientRow: React.FC<PropType> = ({ client }) => {
  return (
  
      <tr>
        <td className="px-4 py-2">{client.name}</td>
        <td className="px-4 py-2">{client.email}</td>
        <td className="px-4 py-2" >{client.phoneNumber}</td>
        <td className="px-4 py-2">
          <button className="bg-red-600 px-[50px] text-white rounded-md">Delete</button>
        </td>
        
      </tr>
  
  );
};

export default ClientRow;
