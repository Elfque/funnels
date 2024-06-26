import { FaArrowRightLong } from "react-icons/fa6";
import Facilities from "./components/Facilities";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

const Funnel3Downsell = () => {
  const checke = [
    "Lorem ipsum dolor sit amet consectetur .",
    "Lorem ipsum dolor sit amet consectetur adipisicing.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur adipisicing.",
    "Lorem ipsum dolor sit amet consectetur.",
  ];
  return (
    <div>
      <Navbar />
      <header className="bg-[url(https://cffunnelstemplates.com/demo/trip-reservation/assets/img/trip-res-banner.jpg)] h-[60vh]">
        <div className="flex items-center w-full mx-auto h-full text-white text-center px-4">
          <div className="w-full py-6">
            <div className="text-6xl font-semibold mb-4">
              WAIT! ONE LAST OFFER
            </div>

            <div className="w-[90%] ">
              Nam euismod enim sit amet dolor pulvinar laoreet. Nam maximus,
              magna ut eleifend pellentesque, nibh lacus Nam euismod enim sit
              amet dolor pulvinar laoreet. Nam maximus, magna ut eleifend4
            </div>
          </div>
        </div>
      </header>

      <div className="my-12">
        <div className="text-center">
          <div className="text-orange-600">TAKE THE MUCH DESERVED</div>
          <div className="text-xl md:text-4xl">Take Break For Yourself!</div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 w-5/6 mx-auto items-center md:text-start text-center mt-4">
          <div className="">
            <img
              src="https://cffunnelstemplates.com/demo/trip-reservation/assets/img/upsell-left.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>

          <div className="text-lg">
            <div className="text-2xl font-bold">WEEKEND PACKAGE</div>
            <div>2 NIGHT AND 3 DAYS</div>
            <div className="my-6 font-light">
              Aliquam tincidunt, enim non iaculis sollicitudin, nunc dui auctor
              turpis, tristique sollicitudin ipsum tortor et mi. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed dapibus iaculis
              lorem sed mattis.
            </div>
            <div className="my-4">
              {checke.map((item: string, idx: number) => (
                <div className="flex gap-2 items-center my-2" key={idx}>
                  <FaArrowRightLong className="text-orange-500" />
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="text-2xl md:text-4xl px-4">
            Offer Starting From <span className="line-through">$199</span>{" "}
            <span className="text-orangee">$199</span>
          </div>

          <button className="bg-orangee text-white font-bold text-3xl p-4 rounded-md mt-4">
            <Link to={"/funnel3/order"}>Yes, I want this offer</Link>
          </button>
          <div className="underline text-sm">
            No thanks, I'd rather pay full price later
          </div>
        </div>
      </div>

      <Facilities />
      <Gallery />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Funnel3Downsell;
