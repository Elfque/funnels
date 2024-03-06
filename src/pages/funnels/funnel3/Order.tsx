import Footer from "./components/Footer";
import EditInput from "../../../components/EditInput";
import Navbar from "./components/Navbar";

const Funnel3Order = () => {
  return (
    <div>
      <Navbar />
      <header className="bg-[url(https://cffunnelstemplates.com/demo/trip-reservation/assets/img/trip-res-banner.jpg)] h-[60vh]">
        <div className="flex items-center w-full mx-auto h-full text-white text-center px-4">
          <div className="w-full py-6">
            <div className="text-6xl font-semibold mb-4">CLAIM YOUR OFFER!</div>

            <div className="w-[90%] ">
              Nam euismod enim sit amet dolor pulvinar laoreet. Nam maximus,
              magna ut eleifend pellentesque, nibh lacus Nam euismod enim sit
              amet dolor pulvinar laoreet. Nam maximus, magna ut eleifend4
            </div>
          </div>
        </div>
      </header>

      <form
        action=""
        className="w-[90%] max-w-2xl mx-auto my-20 p-3 bg-gray-200 rounded-lg grid sm:grid-cols-2 gap-2"
      >
        <EditInput name="" label="First Name" />
        <EditInput name="" label="Last Name" />
        <EditInput name="" label="Email" type="email" />
        <EditInput name="" label="Phone Number" />
        <EditInput name="" label="Address" />
        <EditInput name="" label="State" />
        <EditInput name="" label="City" />
        <EditInput name="" label="Zip Code" />

        {/* CARD DETAILS */}
        <div className="relative">
          <input
            type={"text"}
            name="year"
            placeholder={"Valid Card Number"}
            className="block w-full rounded-md py-2 px-4 outline-none text bg-white border border-gray-500 mt-4"
            maxLength={16}
            required
          />
          <img
            src="https://cffunnelstemplates.com/demo/n-95-mask/assets/images/cards.png"
            alt=""
            className="w-3/12 absolute top-1/2 right-2"
          />
        </div>

        <div className="grid grid-cols-3 items-center gap-2">
          <select
            name=""
            id=""
            className="border rounded-md border-black p-2 h-fit w-full mt-2"
          >
            <option value="0">Months</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>

          <input
            type={"text"}
            name="year"
            // value=""
            // onChange={() => {}}
            placeholder={"Year"}
            className="block w-full rounded-md py-2 px-4 outline-none text bg-white  border-gray-500 mt-2"
            maxLength={4}
            required
          />

          <input
            type={"text"}
            name="year"
            // value=""
            // onChange={() => {}}
            placeholder={"CCV"}
            className="block w-full rounded-md py-2 px-4 outline-none text bg-white border border-gray-500 mt-2"
            maxLength={3}
            required
          />
        </div>

        <div className="text-center sm:col-span-2">
          <button className="bg-blue-500 rounded-md text-white font-semibold text-2xl p-3 mt-6">
            Complete Your Order
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default Funnel3Order;
