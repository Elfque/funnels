import image from "../../../assets/5.jpeg";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

const Upsell = () => {
  return (
    <div>
      <header className="bg-funnel1">
        <Navbar />

        <div className="flex-center text-center h-[60vh] px-4 text-white">
          <div>
            <div className="max-w-[60rem] mx-auto text-2xl md:text-6xl font-bold">
              MAKE YOUR FONDEST MEMORIES WITH FRIENDS
            </div>
            <div className="max-w-xl mx-auto my-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus
              ultrices blandit. Duis ultricies enim elit, sed rutrum justo
              luctus vel.
            </div>
          </div>
        </div>
      </header>

      <div>
        <div className="text-2xl md:text-5xl font-bold text-center">
          ONE TIME <span className="text-orangee">ONLY OFFER</span>
        </div>
        <div className="text-2xl md:text-5xl font-bold text-center border border-black border-dashed w-fit p-2 mx-auto mt-2">
          SAVE <span className="text-orangee"> 20% OFF</span>
        </div>
        <div className="max-w-xl mx-auto font-semibold text-center mt-2 text-xl">
          Join our pre-booking table subscription for family ( Min. 5 Person) &
          get 10% OFF for a Year.
        </div>
      </div>

      <div className="max-w-3xl mx-auto my-12 p-6 shadow-lg">
        <div className="flex gap-6 flex-col md:flex-row md:text-start text-center">
          <img
            src={image}
            alt=""
            className="w-40 h-72 object-cover md:mx-0 mx-auto"
          />
          <div>
            <div className="text-2xl">
              GET THIS <span className="text-gold">OFFER</span>
            </div>
            <div className="text-xl font-semibold">
              Yearly Subscription : $100.00
            </div>
            <div className="text-xl font-semibold">Your Cost: $80.00</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              vitae commodo enim. Suspendisse dictum eget augue eu finibus.
              Proin pharetra imperdiet lacinia. Fusce a ultricies est, ultrices
              vestibulum lectus. Interdum et malesuada fames ac ante ipsum
              primis in faucibus.
            </div>
            <button className="bg-orangee text-white p-3 font-semibold mt-4">
              YES, ADD TO MY ORDER FOR SUBSCIPTION
            </button>
            <div className="capitalize">
              No Thanks, I Dont need this offer right now
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <Footer />
    </div>
  );
};

export default Upsell;
