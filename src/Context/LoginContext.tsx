import React, { useState, createContext } from "react";

interface LoginProviderProps {
  children: React.ReactNode
}

export const LoginContext = createContext({ loggedIn: false, setLoggedIn: (loggedIn: boolean) => { } });

export const LoginProvider = ({ children }: LoginProviderProps) => {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};