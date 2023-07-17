import Navbar from "../../components/Navbar/Navbar";

const Restraurant = () => {
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
          </div>
        </div>

        {/* Description */}
      </main>
    </main>
  );
};

export default Restraurant;
