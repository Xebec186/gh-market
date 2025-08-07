import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white shadow-sm w-full max-w-xl">
      <CiSearch className="text-gray-400 text-xl mr-2" />
      <input
        type="text"
        placeholder="Search"
        className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
      />
    </div>
  );
}

export default SearchBar;
