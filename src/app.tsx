import React from "react";
import { Questions } from "./container";
import { Layout } from "./layout";
import { AppContextProvider } from "./context";

export const App = () => {
  return (
    <AppContextProvider>
      <Layout>
        <Questions />
      </Layout>
    </AppContextProvider>
  );
};
