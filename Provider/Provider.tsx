"use client";
import client from "@/lib/ApolloClient";
import { ApolloProvider } from "@apollo/client";
import React, { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
