import { Cuisine, PRICE, PrismaClient, Restaurant } from "@prisma/client";
import MatchingCards from "../components/Cards/MatchingCards";

import SearchBar from "../components/SearchBar/SearchBar";
import SearchSideBar from "../components/SearchSideBar/SearchSideBar";

interface SearchParams {
  city: string | undefined;
  cuisine: string;
  price: PRICE;
}

const prisma = new PrismaClient();

const fetchRestaurantByLocation = async (searchParams: SearchParams) => {
  const where: any = {};

  if (searchParams.city) {
    where.location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
  }
  if (searchParams.cuisine) {
    where.cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
  }

  if (searchParams.price) {
    where.price = {
      equals: searchParams.price,
    };
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
    reviews:true
  };

  return await prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchCuisines = async (): Promise<Cuisine[]> => {
  return await prisma.cuisine.findMany();
};

const fetchRegions = async (): Promise<Cuisine[]> => {
  return await prisma.location.findMany();
};

const Search = async ({ searchParams }: { searchParams: SearchParams }) => {
  const restaurants = await fetchRestaurantByLocation(searchParams);
  console.log("restaurants:", {restaurants})

  const cuisines = await fetchCuisines();

  const regions = await fetchRegions();
  return (
    <>
      <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
        <SearchBar />
      </div>

      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar
          cuisines={cuisines}
          regions={regions}
          searchParams={searchParams}
        />
        <div className="w-5/6">
          {restaurants.length > 0 ? (
            restaurants.map((restaurant) => (
              <MatchingCards restaurant={restaurant} key={restaurant.id} />
            ))
          ) : (
            <p className="text-lg">
              Sorry, we found no restaurants in the area!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
