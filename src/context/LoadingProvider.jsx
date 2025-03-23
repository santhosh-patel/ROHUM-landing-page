import { createContext, useState } from "react";
import React from "react";

const LoadContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(true);
  return (
    <LoadContext.Provider value={{ isLoading, setisLoading }}>
      {children}
    </LoadContext.Provider>
  );
};
export default LoadContext;
