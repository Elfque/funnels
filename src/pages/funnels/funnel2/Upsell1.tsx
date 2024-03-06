import logo from "../.././../assets/logo.svg";
import { CiMail } from "react-icons/ci";
import { GiCheckMark } from "react-icons/gi";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const Upsell1 = () => {
  const checke = [
    "Lorem ipsum dolor sit amet consectetur .",
    "Lorem ipsum dolor sit amet consectetur adipisicing.",
    "Lorem ipsum dolor sit amet consectetur.",
  ];
  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-between items-center bg-white p-4">
        <img src={logo} alt="" className="w-40" />
        <div className="flex items-center gap-2">
          <CiMail />
          <a href="">support@yourbrand.com</a>
        </div>
      </div>

      <header className="flex-center bg-funnel2Banner h-80 bg-cover">
        <div className="text-center">
          <div className="text-5xl font-bold text-blue-950">
            Wait! Grab One Time Offer
          </div>
          <div className="text-blue-500 text-2xl">
            This Item Includes{" "}
            <span className="font-semibold"> FREE SHIPPING</span> When You
            Ordered Today!
          </div>
        </div>
      </header>

      <div className="grid grid-cols-10 gap-6 w-5/6 mx-auto items-center">
        <div className="col-span-4">
          <img
            src="https://cffunnelstemplates.com/demo/n-95-mask/assets/images/mask1.png"
            alt=""
          />
        </div>

        <div className="col-span-6">
          <div className="text-6xl text-blue-950 font-bold">
            Quisque tempus sed
          </div>

          <div className="my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Nunc eu turpis sed ipsum aliquam
            varius. Aenean non tincidunt urna. Cras varius volutpat justo, id
            laoreet nunc vestibulum amet. Pellentesque egestas, leo ac interdum
            facilisis.
          </div>
          <div className="my-4">
            {checke.map((item: string, idx: number) => (
              <div className="flex gap-2 items-center my-2" key={idx}>
                <GiCheckMark className="text-blue-500" />
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mb-6">
        <div className="font-bold text-5xl text-blue-950 mb-4">
          Now Just: <span className="line-through">$99</span>{" "}
          <span className="text-blue-500">$60</span>
        </div>
        <div className="funnel2-blue-button w-fit mx-auto">
          <div>Get Your N95 Mask Now</div>
          <div className="text-sm font-normal">
            No thanks, i don't like discounts and I'd rather pay full price
            later.
          </div>
        </div>
      </div>

      <Testimonials />

      <FAQ />

      <Footer />
    </div>
  );
};

export default Upsell1;
