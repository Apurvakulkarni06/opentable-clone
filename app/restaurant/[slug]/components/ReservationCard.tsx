"use client"
const ReservationCard = () => {
  return (
    <div className="fixed w-[15%] bg-white rounded p-3 shadow">
      <div className="text-center border-b pb-2 font-bold">
        <h4 className="mr-7 text-lg">Make the reservation</h4>
      </div>

      <div className="my-3 flex flex-col">
        <label htmlFor="" className="mb-2 text-reg font-semibold">
          Party size
        </label>
        <select name="" className="py-3  border-b font-light" id="">
          <option value="">1 People</option>
          <option value="">2 People</option>
        </select>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Date</label>
          <input type="text" className="py-3 border-b font-light w-28" />
        </div>
        <div className="flex flex-col w-[48%]">
          <label htmlFor="">Time</label>
          <select name="" className="py-3  border-b font-light" id="">
            <option value="">7.30AM</option>
            <option value="">9.30AM</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <button className="bg-red-600 w-full rounded text-white py-3">
          Find a time
        </button>
      </div>
    </div>
  );
};

export default ReservationCard;
