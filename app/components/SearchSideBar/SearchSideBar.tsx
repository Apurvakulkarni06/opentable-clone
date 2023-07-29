import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";

const SearchSideBar = ({
  cuisines,
  regions,
  searchParams
}: {
  cuisines: Cuisine[];
  regions: Location[];
  searchParams:{ city: string | undefined, cuisine: string, price: PRICE  }
}) => {

  const prices = [
    {
      price: PRICE.CHEAP,
      label: "$",
      className: "border rounded-l",
    },
    {
      price: PRICE.REGULAR,
      label: "$$",
      className: "border-r border-t border-b",
    },
    {
      price: PRICE.EXPENSIVE,
      label: "$$$",
      className:
        "border-r border-t border-b rounded-r",
    },
  ];
  return (
    <div className="w-1/5">
      <div className="border-b pb-4 flex flex-col">
        <h1 className="mb-2">Regions</h1>
        {regions.map((region) => (
          <Link
            key={region.id}
            href={{
              pathname:"/search",
              query: { ...searchParams,city: region.name },
            }}
            className="font-light text-reg capitalize"
          >
            {region.name}
          </Link>
        ))}
      </div>

      <div className="border-b pb-4 mt-3 flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            key={cuisine.id}
            href={{
              pathname:"/search",
              query: { ...searchParams,cuisine: cuisine.name },
            }}
            className="font-light text-reg capitalize"
          >
            {cuisine.name}
          </Link>
        ))}
      </div>

      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          {
            prices.map(({price, label, className })=>(
              <Link href={{
                pathname:"/search",
                query: { ...searchParams,price}
              }}
              className={`${className} w-full text-reg font-light p-2 text-center`}>
                {label}
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default SearchSideBar;
