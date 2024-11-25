"use client"
import React from "react";
import ClientRow from "./ClientRow";
import { useQuery } from "@apollo/client";
import { GET_CLIENTS } from "@/Query/client";

const Client = [
  {
    id: "1",
    name: "jacob",
    email: "jacob@gmail.com",
    phoneNumber: "1234556",
  },
  {
    id: "2",
    name: "joseph",
    email: "joseph@gmail.com",
    phoneNumber: "1234556",
  },
  {
    id: "3",
    name: "jacob",
    email: "jacob@gmail.com",
    phoneNumber: "1234556",
  },
  {
    id: "4",
    name: "joseph",
    email: "joseph@gmail.com",
    phoneNumber: "1234556",
  },
];
interface ClientData {
  clients: {
    id: string;
    name: string;
    email: string;
    phone: string;
  }[];
}

const Clients = () => {
  const { data } = useQuery<ClientData>(GET_CLIENTS);
  console.log(data?.clients);
  return (
    <table className=" ">
      <thead>
        <tr className="">
          <th className="px-4 text-left">Name</th>
          <th className="px-4  text-left">Email</th>
          <th className=" px-4 text-left">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {data?.clients && data?.clients.length > 0 ? (
          data?.clients.map((client) => <ClientRow client={client} key={client.id} />)
        ) : (
          <tr>
            <td>null</td>
            <td>null</td>
            <td>null</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Clients;
