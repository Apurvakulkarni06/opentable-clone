import { PrismaClient, Review } from "@prisma/client";
import { notFound } from "next/navigation";
import Description from "./components/Description";
import Images from "./components/Images";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";

interface RestaurantDetailsProps  {
  id: number;
  name: string;
  description: string;
  images: string[];
  slug: string;
  reviews: Review[]
}

const prisma = new PrismaClient()

const fetchRestaurantBySlug = async(slug: string): Promise<RestaurantDetailsProps> =>{
    const restaurant = await prisma.restaurant.findUnique({
      where:{
        slug
      },
      select:{
        id: true,
        name: true,
        description: true,
        images: true,
        slug: true,
        reviews: true
      }
    })

    if(!restaurant) notFound()
    return restaurant;
}

const Restraurant = async({params}: { params: { slug: string }}) => {
  const restaurant = await fetchRestaurantBySlug(params.slug)

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug} />
        <Title title={restaurant.name} />
        <Rating reviews={restaurant.reviews} />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews reviews={restaurant.reviews} />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
};

export default Restraurant;
