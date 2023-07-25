import Navbar from "../../components/Navbar/Navbar";

const Reserve = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />

        <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
            {/* Header */}
            <div>
              <h3 className="font-bold">You're almost done!</h3>
              <div className="mt-5 flex">
                <img
                  src="https://resizer.otstatic.com/v2/photos/wide-huge/3/48569568.webp"
                  alt=""
                  className="w-32 h-18 rounded"
                />

                <div className="ml-4">
                  <h1 className="text-3xl font-bold">STK - Dallas</h1>
                  <div className="flex mt-3">
                    <p className="mr-6">Thur, 22nd, 2022</p>
                    <p className="mr-6">7.30 PM</p>
                    <p className="mr-6">3 People</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Header */}

            {/* Form */}
            <div className="mt-10 flex flex-wrap justify-between w-[660px]">
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="First Name"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Last Name"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Phone Number"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Email"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Occasion (option)"
              />
              <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Requests (Optional)"
              />

              <button className="bg-red-600 w-full rounded p-3 text-white font-bold disabled:bg-gray-300">Complete reservation</button>
              <p className="mt-4 text-sm">By clicking “Complete reservation” you agree to the OpenTable Terms of Use and Privacy Policy. Message & data rates may apply. You can opt out of receiving text messages at any time in your account settings or by replying STOP.</p>
            </div>
            {/* Form */}
          </div>
        </div>
      </main>
    </main>
  );
};

export default Reserve;
