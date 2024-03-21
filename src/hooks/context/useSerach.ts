//import libaries and components
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

//main component
export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
