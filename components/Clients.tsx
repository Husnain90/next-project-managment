import React from "react";
import ClientRow from "./ClientRow";

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

const Clients = () => {
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
        {Client && Client.length > 0 ? (
          Client.map((client) => <ClientRow client={client} key={client.id} />)
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
