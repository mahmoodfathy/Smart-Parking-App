import React, { useState, createContext } from "react";

export const formContext = createContext();
const { Provider } = formContext;

export const FormProvider = ({ children }) => {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <Provider
      value={{
        isSignedUp,
        isSignedIn,
        setIsSignedIn,
        setIsSignedUp,
        isAdmin,
        setIsAdmin,
      }}
    >
      {children}
    </Provider>
  );
};
