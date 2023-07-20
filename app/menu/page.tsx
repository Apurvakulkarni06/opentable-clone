import Navbar from "../../components/Navbar/Navbar";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

const Menu = () => {
  
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

            {/* Menu */}
                <div className="bg-white mt-5">
                    <div className="mt-4 mb-1 pb-1">
                        <h1 className="text-4xl font-bold">Menu</h1>
                    </div>
                    <div className="flex flex-wrap justify-between">
                        {/* Menu card */}
                            <div className="border rounded p-3 w-[49%] mb-3">
                                <h3 className="font-bold text-lg">Surf and Turf</h3>
                                <p className="font-light mt-1 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda molestiae consequatur.</p>

                                <p className="mt-7">$1000</p>
                            </div>
                        {/* Menu Card */}
                    </div>
                </div>
            {/* Menu */}

            
          </div>

        </div>

        {/* Description */}
      </main>
    </main>
  );
};

export default Menu;
