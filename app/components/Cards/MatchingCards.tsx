import Link from "next/link";

const MatchingCards = () => {
  return (
    <div className="border-b flex pb-5">
      <img
        src="https://resizer.otstatic.com/v2/photos/wide-huge/3/48569568.webp"
        alt=""
        className="w-44 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">STK - Dallas</h2>
        <div className="flex items-start">
          <div className="flex mb-2 ">****</div>
          <p className="text-sm font-light ml-2">Exceptional</p>
          <p className="text-sm font-light ml-2">(2019)</p>
        </div>

        <div className="mb-9">
          <div className="font-light flex text-reg">
            <p className="mr-4">$$$</p>
            <p className="mr-4">Mexican</p>
            <p className="mr-4">Ottowa</p>
          </div>
        </div>

        <div className="text-red-600">
          <Link href="/restaurant/milesstone-grill">View more information</Link>
        </div>
      </div>
    </div>
  );
};

export default MatchingCards;
