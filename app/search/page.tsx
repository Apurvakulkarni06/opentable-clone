import { PrismaClient, Restaurant } from "@prisma/client";
import MatchingCards from "../components/Cards/MatchingCards";

import SearchBar from "../components/SearchBar/SearchBar";
import SearchSideBar from "../components/SearchSideBar/SearchSideBar";

const prisma = new PrismaClient();

const fetchRestaurantByLocation = async (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };
  if (!city) return await prisma.restaurant.findMany({ select });

  return await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select,
  });
};
// { searchParams }: { params: { city: string | undefined } }
const Search = async ({
  searchParams,
}: {
  searchParams: { city: string | undefined };
}) => {
  const restaurants = await fetchRestaurantByLocation(searchParams.city);
  console.log({ restaurants });
  return (
    <>
      <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
        <SearchBar />
      </div>

      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        {restaurants.length > 1 ? (
          <div className="w-5/6">
            <MatchingCards />
          </div>
        ) : (
          <p className="text-lg">Sorry, we found no restaurants in the area!</p>
        )}
      </div>
    </>
  );
};

export default Search;
