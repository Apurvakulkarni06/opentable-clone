import MatchingCards from "../../components/Cards/MatchingCards";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";

const Search = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />

        <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
          <SearchBar />
        </div>

        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          {/* Search Side Bar */}
          <div className="w-1/5">
            <div className="border-b pb-4">
              <h1 className="mb-2">Regions</h1>
              <p className="font-light text-reg">Toronto</p>
              <p className="font-light text-reg">Ottawa</p>
              <p className="font-light text-reg">Montreal</p>
              <p className="font-light text-reg">Hamilton</p>
              <p className="font-light text-reg">Kingston</p>
              <p className="font-light text-reg">Nigara</p>
            </div>

            <div className="border-b pb-4 mt-3">
              <h1 className="mb-2">Cuisine</h1>
              <p className="font-light text-reg">Chinese</p>
              <p className="font-light text-reg">Maxican</p>
              <p className="font-light text-reg">Italian</p>
            </div>

            <div className="mt-3 pb-4">
              <h1 className="mb-2">Price</h1>
              <div className="flex">
                <button className="border w-full text-reg font-light rounded-l p-2">
                  $
                </button>
                <button className="border-r border-t border-b w-full text-reg font-light p-2">
                  $$
                </button>
                <button className="border-r border-t border-b  w-full text-reg font-light rounded-r p-2">
                  $$$
                </button>
              </div>
            </div>
          </div>
            {/* Search Side Bar */}
          <div className="w-5/6">
            {/* Restraunt Matching cards */}
            <MatchingCards />
            {/* Restraunt Matching cards */}
          </div>


        </div>
      </main>
    </main>
  );
};

export default Search;
