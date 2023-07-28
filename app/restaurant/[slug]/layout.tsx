import { useParams } from "next/navigation";
import Header from "./components/Header";

const RestaurantLayout = ({ children, params }: { children: React.ReactNode, params:{ slug: string} }) => {
  return (
    <>
      <Header title={params.slug} />

      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-10">
        {children}
      </div>
    </>
  );
};

export default RestaurantLayout;
