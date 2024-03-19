//import libraries
import React, { createContext, ReactNode, useState } from "react";
//type
import { ToggleSwitchContextType } from "../types/ToggleSwithType";
// Create the context
export const ToggleSwitchContext = createContext<
  ToggleSwitchContextType | undefined
>(undefined);

// Create a provider component
export const ToggleSwitchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [switchStatus, setSwitchStatus] = useState("gifs");

  return (
    <ToggleSwitchContext.Provider value={{ switchStatus, setSwitchStatus }}>
      {children}
    </ToggleSwitchContext.Provider>
  );
};
