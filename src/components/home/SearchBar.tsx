//import libraries & components
import { useForm, SubmitHandler } from "react-hook-form";
import { useSearch } from "../../hooks/context/useSerach";
import { LiaSearchSolid } from "react-icons/lia";
//types
import { SearchInputType } from "../../types/SerchTypes";

//main component
export default function SearchBar() {
  //handle serchdata
  const { handleSearchData } = useSearch();
  //react hook form
  const { register, handleSubmit } = useForm<SearchInputType>();
  //onSubmit data
  const onSubmit: SubmitHandler<SearchInputType> = (data) => {
    handleSearchData(data.searchData);
  };
  return (
    <>
      <div>
        <form
          className="flex flex-row justify-between "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className=" h-[3rem] rounded-l-full w-full px-8 focus:outline-none "
            {...register("searchData")}
            type="text"
            placeholder="Search"
          />
          <button
            className="flex flex-row justify-center items-center text-3xl h-[3rem] rounded-r-full bg-white w-[15%] border-l-[1.5px] border-black hover:bg-[#EA4335] hover:text-white hover:border-white "
            type="submit"
          >
            <LiaSearchSolid />
          </button>
        </form>
      </div>
    </>
  );
}
