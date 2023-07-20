import Navbar from "../../components/Navbar/Navbar";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

const Restraurant = () => {
  
  const reviews=[{
    "review":"I have been a big fan of Cecconis Mayfair for years. Last night felt like a real off day. Food average and service very poor. Hopefully an isolated experience. Didn’t see much senior management around and maybe just short staffed. Come on Cecconis !"
  }, {
    "review":"I used to go this restaurant quite a lot before pandemic and of course to this day its still hard to get a booking. Service has gone down hill, we didn't get attended too after 30 mins and if it never used to be like that. The waiters were always on point with attending tables — not quite sure if it is an under staff issue but it completely ruined our experience and we barely enjoyed our food. I did not think I would ever write a bad review for Cecconi's because I believe it's one of the best Italian restaurants in Mayfair and actually one of my top favourite restaurants — I will not returning for a while!"
  }]
  
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />

        {/* Header */}
        <div className="h-96 overflow-hidden">
          <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center item-center">
            <h1 className="text-7xl text-white capitalize text-shadow text-center">
              Cecconi's Mumbai (Toronto){" "}
            </h1>
          </div>
        </div>

        {/* Header */}

        {/* Description */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-10">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            {/* Resarant Navbar */}
            <nav className="flex text-reg border-b pb-2">
              <a href="" className="mr-7">
                Overview
              </a>
              <a href="" className="mr-7">
                Menu
              </a>
            </nav>
            {/* Resarant Navbar */}

            {/* Title */}
            <div className="mt-4 border-b pb-6">
              <h1 className="text-6xl font-bold">
                {" "}
                Cecconi's Mumbai (Toronto)
              </h1>
            </div>
            {/* Title */}

            {/* Rating */}
            <div className="flex items-end">
              <p>******</p>
              <p className="text-reg ml-3">4.4</p>
              <div>
                <p className="text-reg ml-4">600 reviews</p>
              </div>
            </div>
            {/* Rating */}

            {/* Description of Resatraunt */}
            <div>
              <p className="text-lg font-light mt-4">
                Cecconi’s is a modern day classic Italian restaurant open for
                dinner every day, with lunch on weekends and brunch on Sundays.
                Tables are available indoors or outdoors, with views out over
                the Arabian sea.
              </p>
            </div>

            {/* Description of Resatraunt */}

            {/* Images */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                7 Photos
              </h1>
              <div className="flex flex-wrap">
                  <img src="https://resizer.otstatic.com/v2/photos/xlarge/1/23360011.webp" alt="" className="w-56 h-44 mr-1 mb-1" />
                  <img src="https://resizer.otstatic.com/v2/photos/xlarge/1/23360012.webp" alt="" className="w-56 h-44 mr-1 mb-1" />
                  <img src="https://resizer.otstatic.com/v2/photos/xlarge/1/23360013.webp" alt="" className="w-56 h-44 mr-1 mb-1" />
                  <img src="https://resizer.otstatic.com/v2/photos/xlarge/1/23360014.webp" alt="" className="w-56 h-44 mr-1 mb-1" />
                  <img src="https://resizer.otstatic.com/v2/photos/xlarge/1/42860526.webp" alt="" className="w-56 h-44 mr-1 mb-1" />
              </div>
            </div>
            {/* Images */}

            {/* Reviews */}
            <div>
              <h1 className="font-bold text-3xl mt-10 mb-7 pb-5 border-b">
                What people are saying
              </h1>

              {/* Review Cards */}
              {/* Review 1 */}
              <ReviewCard userInitials="MJ" username="Micheal Jorden" date="25st Dec 2022" rating="*****" review={reviews[0]["review"]} />

              {/* Review 2 */}
              <ReviewCard userInitials="AK" username="Anuj Kale" date="22st Nov 2021" review={reviews[1]["review"]} rating="****" />
              {/* Review Cards */}
            </div>

            {/* Reviews */}
          </div>
          <div className="w-[27%] relative text-reg">
            <div className="fixed w-[15%] bg-white rounded p-3 shadow">
              <div className="text-center border-b pb-2 font-bold">
                <h4 className="mr-7 text-lg">Make the reservation</h4>
              </div>

              <div className="my-3 flex flex-col">
                <label htmlFor="" className="mb-2 text-reg font-semibold">Party  size</label>
                <select name="" className="py-3  border-b font-light" id="">
                  <option value="">1 People</option>
                  <option value="">2 People</option>
                </select>
              </div>

              <div className="flex justify-between">
                  <div className="flex flex-col w-[48%]">
                    <label htmlFor="" >Date</label>
                    <input type="text" className="py-3 border-b font-light w-28" />
                  </div>
                  <div className="flex flex-col w-[48%]">
                    <label htmlFor="" >Time</label>
                    <select name="" className="py-3  border-b font-light" id="">
                      <option value="">7.30AM</option>
                      <option value="">9.30AM</option>
                    </select>
                  </div>
              </div>

              <div className="mt-5">
                <button className="bg-red-600 w-full rounded text-white py-3">Find a time</button>
              </div>
            </div>

          </div>

        </div>

        {/* Description */}
      </main>
    </main>
  );
};

export default Restraurant;
