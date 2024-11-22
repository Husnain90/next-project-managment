import { gql } from "@apollo/client";

const ADD_CLIENT = gql`
  mutation AddClient {
    addClient($name:string! , $email:string! , $phone:string!) {
      id
      name
      email
      phone 
    }
  }
`;

const DELETE_CLIENT = gql`
  mutation DeleteClient {
    deleteClient($id: string!) {
      id
      name
      email
      phone
    }
  }
`;

export { ADD_CLIENT, DELETE_CLIENT };
