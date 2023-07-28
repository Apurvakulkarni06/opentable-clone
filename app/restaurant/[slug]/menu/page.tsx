import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";
import MenuCard from "../components/MenuCard";
import { Item, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const fetchRestaurantMenu = async(slug:string): Promise<Item[]> =>{
  const restaurant = await prisma.restaurant.findUnique({
    where:{
      slug
    },
    select:{
      items: true
    }
  })
  if(!restaurant){
    throw new Error
  }

  return restaurant.items
}

const MenuPage = async({params}:{params:{slug:string}}) => {
  
  const items = await fetchRestaurantMenu(params.slug)
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={params.slug} />

        <div className="bg-white mt-5">
          <Menu />

          <MenuCard menu={items}/>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
