//search form data
export interface SearchInputType {
  searchData: string;
}

//search context type
export interface SearchContextType {
  searchData: string;
  handleSearchData: (data: string) => void;
}
