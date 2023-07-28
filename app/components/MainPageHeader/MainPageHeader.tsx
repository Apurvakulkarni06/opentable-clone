import Link from "next/link";

import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";

const MainPageHeader = () => {
  return (
    <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
      <div className="text-center mt-10">
        <h1 className="text-white text-5xl font-bold mb-2">
          Find your table for any occasion
        </h1>
      </div>
      <SearchBar />

      <Link href="/restaurant/bombay">
        <Cards />
      </Link>
    </div>
  );
};

export default MainPageHeader;
