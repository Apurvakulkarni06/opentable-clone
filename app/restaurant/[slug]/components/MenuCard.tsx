import { Item } from "@prisma/client";

const MenuCard = ({menu}: {menu:Item[]}) => {
  return (
    <div className="flex flex-wrap justify-between">

      {
        menu.length > 1 ? (
          menu.map(item => (
            <div className="border rounded p-3 w-[49%] mb-3" key={item.id}>
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="font-light mt-1 text-sm">{item.description}</p>
    
              <p className="mt-7">{item.price}</p>
            </div>
          ))

        ):
        (
          <>
          <div className="text-center p-3  mb-3" >
            No Menu Available Now!
          </div>
          </>
        )
      }
      
    </div>
  );
};

export default MenuCard;
