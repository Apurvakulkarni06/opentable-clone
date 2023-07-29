import { PrismaClient, Review } from "@prisma/client";
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

    if(!restaurant) throw new Error()
    return restaurant;
}

const Restraurant = async({params}: { params: { slug: string }}) => {
  const restaurant = await fetchRestaurantBySlug(params.slug)
 console.log("restaurant", restaurant)
  // const reviews = [
  //   {
  //     review:
  //       "I have been a big fan of Cecconis Mayfair for years. Last night felt like a real off day. Food average and service very poor. Hopefully an isolated experience. Didn’t see much senior management around and maybe just short staffed. Come on Cecconis !",
  //   },
  //   {
  //     review:
  //       "I used to go this restaurant quite a lot before pandemic and of course to this day its still hard to get a booking. Service has gone down hill, we didn't get attended too after 30 mins and if it never used to be like that. The waiters were always on point with attending tables — not quite sure if it is an under staff issue but it completely ruined our experience and we barely enjoyed our food. I did not think I would ever write a bad review for Cecconi's because I believe it's one of the best Italian restaurants in Mayfair and actually one of my top favourite restaurants — I will not returning for a while!",
  //   },
  // ];

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
