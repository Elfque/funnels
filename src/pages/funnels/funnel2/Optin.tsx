import card from "../../../assets/master-card.png";
import mask1 from "../../../assets/mask1.png";
import { GiCheckMark } from "react-icons/gi";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Sing = () => {
  return (
    <div className="border border-blue-500 py-8">
      <img
        src="https://cffunnelstemplates.com/demo/n-95-mask/assets/icons/icon-6.png"
        alt=""
        className="mx-auto"
      />
      <div className="mt-4 text-center text-2xl font-semibold">
        4 Layer Hepa Filter Lorem Ipsum
      </div>
    </div>
  );
};

const Funnel2Optin = () => {
  const checke = [
    "Lorem ipsum dolor sit amet consectetur .",
    "Lorem ipsum dolor sit amet consectetur adipisicing.",
    "Lorem ipsum dolor sit amet consectetur.",
  ];

  return (
    <div>
      {/* NAVBAR */}
      <Navbar />

      {/* header */}
      <header className="bg-funnel2Banner h-[90vh]">
        <div className="grid grid-cols-10 w-5/6 mx-auto items-center">
          <div className="col-span-6">
            <div className="text-blue-500 text-lg font-semibold">
              Filter Efficiency Above 99%
            </div>
            <div className="text-6xl text-blue-950 font-bold">
              Order Your N95 Mask! Up To70% Off Today
            </div>

            <div className="my-4">
              {checke.map((item: string, idx: number) => (
                <div className="flex gap-2 items-center my-2" key={idx}>
                  <GiCheckMark className="text-blue-500" />
                  <div>{item}</div>
                </div>
              ))}
            </div>

            <button className="funnel2-blue-button">
              Get Your N95 Mask Now
            </button>
            <img src={card} alt="" className="w-60 mt-4" />
          </div>
          <div className="col-span-4">
            <img src={mask1} alt="" />
          </div>
        </div>
      </header>

      <div className="bg-blue-950 py-6 h-40">
        <div className="text-center text-white mb-4">As Seen:</div>
        <div className="flex justify-around items-center">
          <img
            src="https://cffunnelstemplates.com/demo/n-95-mask/assets/icons/icon-1.png"
            alt=""
          />
          <img
            src="https://cffunnelstemplates.com/demo/n-95-mask/assets/icons/icon-2.png"
            alt=""
          />
          <img
            src="https://cffunnelstemplates.com/demo/n-95-mask/assets/icons/icon-3.png"
            alt=""
          />
          <img
            src="https://cffunnelstemplates.com/demo/n-95-mask/assets/icons/icon-4.png"
            alt=""
          />
          <img
            src="https://cffunnelstemplates.com/demo/n-95-mask/assets/icons/icon-5.png"
            alt=""
          />
        </div>
      </div>

      <div className="text-center text-5xl">
        <div className="text-blue-500 italic mb-2">Protective N95 Mask</div>
        <div className="text-blue-950 font-bold">
          Take Care of You And Your Family
        </div>
      </div>

      <div className="grid grid-cols-2 w-5/6 mx-auto items-center gap-8 my-10">
        <img
          src="https://cffunnelstemplates.com/demo/n-95-mask/assets/images/mask-women.png"
          alt=""
        />
        <div className="grid grid-cols-2 gap-10">
          <Sing />
          <Sing />
          <Sing />
          <Sing />
        </div>
      </div>

      <div className="bg-funnel2Banner py-4">
        <div className="text-center text-5xl mb-8">
          <div className="text-blue-500 italic mb-2">
            Introducing The Protective N95 Mask
          </div>
          <div className="text-blue-950 font-bold">
            The #1 Rated Protective N95 Mask
          </div>
        </div>
        <div className="grid grid-cols-2 w-5/6 mx-auto items-center">
          <div className="">
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
                  <GiCheckMark className="text-blue-500" />
                  <div>{item}</div>
                </div>
              ))}
            </div>

            <button className="funnel2-blue-button">
              Get Your N95 Mask Now
            </button>
            <img src={card} alt="" className="w-60 mt-4" />
          </div>
          <div className="">
            <img
              src="https://cffunnelstemplates.com/demo/n-95-mask/assets/images/mask-women1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="bg-[url(https://cffunnelstemplates.com/demo/n-95-mask/assets/images/banner-guarantee.jpg)] py-10">
        <div className="grid grid-cols-2 text-white w-5/6 mx-auto text-center gap-10">
          <div className="border border-white p-10">
            <img
              src="https://cffunnelstemplates.com/demo/n-95-mask/assets/icons/icon-10.png"
              alt=""
              className="mx-auto"
            />

            <div className="text-4xl font-bold my-6">
              Guaranteed to Fit Any One or Your Money Back - No Questions Asked!
            </div>

            <div className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit.
              Vestibulum blandit metus quis magna luctus bibendum Morbi lorem
              augue.
            </div>
          </div>

          <div className="border border-white p-10">
            <img
              src="https://cffunnelstemplates.com/demo/n-95-mask/assets/icons/icon-10.png"
              alt=""
              className="mx-auto"
            />

            <div className="text-4xl font-bold my-6">
              Guaranteed to Fit Any One or Your Money Back - No Questions Asked!
            </div>

            <div className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit.
              Vestibulum blandit metus quis magna luctus bibendum Morbi lorem
              augue.
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-5xl mb-8">
        <div className="text-blue-500 italic mb-2">
          Join THOUSANDS Of Satisfied Customers
        </div>
        <div className="text-blue-950 font-bold">
          Over 25K 5 Star Reviews And Counting!
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 w-5/6 mx-auto">
        <img
          src="https://cffunnelstemplates.com/demo/n-95-mask/assets/images/team1.png"
          alt=""
        />
        <img
          src="https://cffunnelstemplates.com/demo/n-95-mask/assets/images/team2.png"
          alt=""
        />
        <img
          src="https://cffunnelstemplates.com/demo/n-95-mask/assets/images/team3.png"
          alt=""
        />
        <img
          src="https://cffunnelstemplates.com/demo/n-95-mask/assets/images/team4.png"
          alt=""
        />
        <img
          src="https://cffunnelstemplates.com/demo/n-95-mask/assets/images/team5.png"
          alt=""
        />
        <img
          src="https://cffunnelstemplates.com/demo/n-95-mask/assets/images/team-6.png"
          alt=""
        />
      </div>
      <div className="text-center mt-6">
        <button className="funnel2-blue-button mb-2">
          Get Your N95 Mask Now
        </button>
        <div className="flex-center mt-4">
          <img src={card} alt="" className="w-60" />
        </div>
      </div>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      <div className="bg-blue-950 text-center py-6 mt-10">
        <div className="grid grid-cols-3 w-5/6 mx-auto gap-4 text-white divide-x-2 divide-blue-500">
          <div className="px-6">
            <img
              src="https://cffunnelstemplates.com/demo/n-95-mask/assets/icons/icon-12.png"
              alt=""
              className="mx-auto"
            />

            <div className="text-2xl font-semibold my-4">Secure Payments</div>
            <div className="text-lg">
              Verified transactions protecting your privacy and security.
            </div>
          </div>

          <div className="px-6">
            <img
              src="https://cffunnelstemplates.com/demo/n-95-mask/assets/icons/icon-12.png"
              alt=""
              className="mx-auto"
            />

            <div className="text-2xl font-semibold my-4">Secure Payments</div>
            <div className="text-lg">
              Verified transactions protecting your privacy and security.
            </div>
          </div>
          <div className="px-6">
            <img
              src="https://cffunnelstemplates.com/demo/n-95-mask/assets/icons/icon-12.png"
              alt=""
              className="mx-auto"
            />

            <div className="text-2xl font-semibold my-4">Secure Payments</div>
            <div className="text-lg">
              Verified transactions protecting your privacy and security.
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Funnel2Optin;
