import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
  mutation DeleteClient {
    addProject($name: string!, $description: string!, $clientId: string) {
      id
      name
      description
      status
    }
  }
`;
const DELETE_PROJECT = gql`
  mutation DeleteProject {
    deleteProject($id: string!) {
      id
      name
      description
      status
           client {
            id
            name
            email
            phone
        }
    }
  }
`;

const UPDATE_PROJECT = gql`
  mutation UpdateProject {
    updateProject($id: string!) {
      id
      name
      description
      status
    }
  }
`;
export {ADD_PROJECT,UPDATE_PROJECT,DELETE_PROJECT}