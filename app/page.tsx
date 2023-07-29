import { Cuisine, Location, PRICE, PrismaClient, Review } from "@prisma/client";
import Link from "next/link";
import MainPageHeader from "../app/components/MainPageHeader/MainPageHeader";
import Cards from "./components/Cards/Cards";
import SearchBar from "./components/SearchBar/SearchBar";

export interface RestaurantProps {
  id: number;
  name: string;
  main_image: string;
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  slug: string;
  reviews: Review[];
}

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantProps[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      price: true,
      cuisine: true,
      location: true,
      slug: true,
      reviews: true,
    },
  });
  console.log(restaurants);
  return restaurants;
};
export default async function Home() {
  const restaurants = await fetchRestaurants();
  return (
    <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
      <div className="text-center mt-10">
        <h1 className="text-white text-5xl font-bold mb-2">
          Find your table for any occasion
        </h1>
      </div>
      <SearchBar />
      <div className="py-3 px-3 mt-10 flex flex-wrap">
        {restaurants.map((restaurant) => (
          <Cards restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
}
