//import libraries and types
import React, { createContext, useState } from "react";
import { SearchContextType } from "../types/SerchTypes";

//export search context
export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

//export search provider
export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchData, setSearchData] = useState<string>("");

  const handleSearchData = (data: string) => {
    setSearchData(data);
  };

  return (
    <SearchContext.Provider value={{ searchData, handleSearchData }}>
      {children}
    </SearchContext.Provider>
  );
};
