import { AiOutlineSearch } from "react-icons/ai";
const SearchBar = () => {
  return (
    <div className="text-left py-3 m-auto flex justify-center">
      <span>
        <AiOutlineSearch />
        <input
          className="rounded text-lg mr-3 w-[450px] p-2 "
          type="text"
          placeholder="State, city or town"
        />
      </span>
      <button className="rounded bg-red-600 px-9 py-2 text-white">
        Let's go
      </button>
    </div>
  );
};

export default SearchBar;
