//import libaries and components
import { useContext } from "react";
import { ToggleSwitchContext } from "../../context/ToggleSwithContext";

// Custom hook to consume the context
export const useToggleSwitch = () => {
  const context = useContext(ToggleSwitchContext);
  if (!context) {
    throw new Error(
      "useToggleSwitch must be used within a ToggleSwitchProvider"
    );
  }
  return context;
};
