import card from "../../../assets/master-card.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Facilities from "./components/Facilities";
import Gallery from "./components/Gallery";

const Funnel3Optin = () => {
  const checke = [
    "Lorem ipsum dolor sit amet consectetur .",
    "Lorem ipsum dolor sit amet consectetur adipisicing.",
    "Lorem ipsum dolor sit amet consectetur adipisicing.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
  ];

  return (
    <div className="bg-gray-100">
      {/* NAVBAR */}
      <Navbar />

      {/* header */}
      <header className="bg-[url(https://cffunnelstemplates.com/demo/trip-reservation/assets/img/trip-res-banner.jpg)] h-[90vh]">
        <div className="flex items-end w-full mx-auto h-full text-white text-center">
          <div className="w-full py-6 bg-black/60">
            <div className="text-6xl font-semibold mb-4">
              Your Awesome Headline Here
            </div>

            <div className="w-[90%] ">
              Nam euismod enim sit amet dolor pulvinar laoreet. Nam maximus,
              magna ut eleifend pellentesque, nibh lacus Nam euismod enim sit
              amet dolor pulvinar laoreet. Nam maximus, magna ut eleifend
            </div>
          </div>
        </div>
      </header>

      <div className="bg-funnel2Banner py-4">
        <div className="grid grid-cols-2 gap-6 w-5/6 mx-auto items-center">
          <div className="">
            <img
              src="https://cffunnelstemplates.com/demo/trip-reservation/assets/img/beach-img.webp"
              alt=""
            />
          </div>
          <div className="">
            <div className="text-5xl mb-4">About Us</div>
            <div className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum blandit metus quis magna luctus bibendum. Morbi lorem
              augue, vulputate dictum diam vitae, venenatis facilisis turpis.
              Etiam sed nunc aliquet, laoreet neque a, volu tpat velit. Nunc eu
              turpis sed ipsum aliquam varius. Aenean non tincidunt urna. Sed at
              tristique eros.
            </div>
            <div className="text-xl">
              Cras varius volutpat justo, id laoreet nunc vestibulum amet. Sed
              quis sodales felis. Proin viverra vulputate bibendum. Pellentesque
              egestas, leo ac interdum facilisis.
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
      </div>

      <Facilities />

      <div className="text-center mt-6">
        <button className="funnel3-blue-button mb-2">CALL TO ACTION</button>
        <div className="flex-center mt-4">
          <img src={card} alt="" className="w-60" />
        </div>
      </div>

      <div className="bg-[url(https://cffunnelstemplates.com/demo/trip-reservation/assets/img/trip-res-banner2.webp)] text-white py-10">
        <div>
          <div className="text-center mb-8 text-white">
            <div className=" mb-2 text-5xl">Other Facilities</div>
            <div className="">
              Nam euismod enim sit amet dolor pulvinar laoreet. Nam maximus,
              magna ut eleifend pellentesque, nibh lacus
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 text-center font-semibold text-lg mt-8">
          <div>
            <img
              src="https://cffunnelstemplates.com/demo/trip-reservation/assets/img/parking.webp"
              className="mx-auto mb-2"
              alt=""
            />
            <div className="">Free Parking</div>
          </div>

          <div>
            <img
              src="https://cffunnelstemplates.com/demo/trip-reservation/assets/img/clock.webp"
              alt=""
              className="mx-auto mb-2"
            />
            <div className="">24-Hours Front Desk</div>
          </div>

          <div>
            <img
              src="https://cffunnelstemplates.com/demo/trip-reservation/assets/img/dog.webp"
              alt=""
              className="mx-auto mb-2"
            />
            <div className="">Pet Friendly</div>
          </div>

          <div>
            <img
              src="https://cffunnelstemplates.com/demo/trip-reservation/assets/img/cycle.webp"
              alt=""
              className="mx-auto mb-2"
            />
            <div className="">Bicycle Rental</div>
          </div>
        </div>
        <center className="mt-10">
          <button className="funnel3-blue-button mb-2">CALL TO ACTION</button>
        </center>
      </div>

      <Gallery />
      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      <div className="bg-[url(https://cffunnelstemplates.com/demo/trip-reservation/assets/img/banner-3-Trip.jpg)] bg-no-repeat bg-cover text-white py-10 bg-fixed h-[70vh] flex-center">
        <div className="text-center text-white">
          <div className="text-3xl md:text-6xl">Planning a trip to Place</div>

          <div className="max-w-lg mx-auto mt-4">
            Nam euismod enim sit amet dolor pulvinar laoreet. Nam maximus, magna
            ut eleifend pellentesque, nibh lacus
          </div>

          <button className="bg-orangee text-white font-semibold text-2xl py-3 px-6 mt-6 rounded-md">
            CALL TO ACTION
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Funnel3Optin;
