import Link from "next/link";
import { RestaurantProps } from "../../page";
import Price from "../Price/Price";
import Stars from "../Stars/Stars";

interface Props {
  restaurant: RestaurantProps;
}
const Cards = ({ restaurant }: Props) => {
  return (
    <Link href={`/restaurant/${restaurant.slug}`}>
      <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
        <img src={restaurant.main_image} alt="" className="w-full h-36 " />
        <div className="p-1">
          <h3 className="text-2xl font-bold mb-2">{restaurant.name}</h3>
          <div className="flex items-start">
            <div className="flex mb-2">
            <Stars reviews={restaurant.reviews} />
            </div>
            
            <p className="ml-2">{restaurant.reviews.length} review{restaurant.reviews.length > 1 ? 's': ''}</p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className="mr-3 ">{restaurant.cuisine.name}</p>
            <Price price={restaurant.price} />
            <p>{restaurant.location.name}</p>
          </div>

          <p className="text-sm mt-1 font-bold">Booked 3 times day</p>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
