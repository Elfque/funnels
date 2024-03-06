import EditInput from "./components/EditInput";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Order = () => {
  return (
    <div>
      <header className="bg-funnel1">
        <Navbar />

        <div className="flex-center text-center h-[60vh] px-4 text-white">
          <div>
            <div className="max-w-[60rem] mx-auto text-2xl md:text-6xl font-bold">
              CLAIM! YOUR FREE OFFER
            </div>
            <div className="max-w-xl mx-auto my-6">
              Etiam luctus turpis urna, at pretium nisl suscipit id. Vestibulum
              tortor lorem, suscipit scelerisque egestas sed, tempus non velit.
            </div>
          </div>
        </div>
      </header>

      <form
        action=""
        className="w-[90%] max-w-md mx-auto my-20 p-3 bg-gray-200 rounded-lg"
      >
        <EditInput name="" label="First Name" />
        <EditInput name="" label="Last Name" />
        <EditInput name="" label="Email" type="email" />
        <EditInput name="" label="Phone Number" />
        <EditInput name="" label="Address" />
        <EditInput name="" label="State" />
        <EditInput name="" label="City" />

        {/* CARD DETAILS */}
        <div className="relative">
          <input
            type={"text"}
            name="year"
            placeholder={"Valid Card Number"}
            className="block w-full rounded-md py-2 px-4 outline-none text bg-white border border-gray-500 mt-2"
            maxLength={16}
            required
          />
          <img
            src="https://cffunnelstemplates.com/demo/n-95-mask/assets/images/cards.png"
            alt=""
            className="w-3/12 absolute top-3 right-2"
          />
        </div>

        <div className="grid grid-cols-3 items-center gap-2">
          <select
            name=""
            id=""
            className="border rounded-md border-black p-2 h-fit w-full mt-1"
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

        <div className="text-center">
          <button className="bg-blue-500 rounded-md text-white font-semibold text-2xl p-3 mt-6">
            Complete Your Order
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default Order;
