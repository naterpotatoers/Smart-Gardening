import React, { createContext } from "react";

const AccountContext = createContext();

const Account = (props) => {
  return <AccountContext.Provider></AccountContext.Provider>;
};

export { Account, AccountContext };
