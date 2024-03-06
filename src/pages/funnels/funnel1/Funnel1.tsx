import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagram,
  FaStar,
} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import image from "../../../assets/5.jpeg";
import { GiSemiClosedEye } from "react-icons/gi";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Funnel1 = () => {
  return (
    <div>
      <header className="bg-funnel1">
        <Navbar />

        <div className="flex-center text-center h-[90vh] text-white">
          <div>
            <div className="text-orangee text-xl">
              WE’RE BEST CAFE, BAR & RESTAURANT
            </div>
            <div className="max-w-[60rem] mx-auto text-6xl font-bold">
              MAKE YOUR FONDEST MEMORIES WITH FRIENDS
            </div>
            <div className="max-w-xl mx-auto my-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus
              ultrices blandit. Duis ultricies enim elit, sed rutrum justo
              luctus vel.
            </div>

            <button className="bg-orangee text-white font-semibold text-2xl p-3 mt-6">
              Join Our Community
            </button>
          </div>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-6 w-5/6 mx-auto my-12 md:text-start text-center">
        <div>
          <div className="text-orangee font-semibold">WELCOME TO</div>
          <div className="text-4xl font-bold">JOHN’S BAR & CAFE</div>
          <div className="my-4 italic">
            <q>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
              eum. Ducimus, perferendis voluptate! Earum quisquam impedit
            </q>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            bibendum malesuada pellentesque. Quisque id tellus sed risus
            consequat ultricies. Curabitur non fringilla velit. Vivamus sed diam
            lectus. Praesent vel nibh egestas.
          </div>

          <button className="bg-transparent border-2 border-black p-3 font-semibold mt-4">
            JOIN OUR COMMUNITY{" "}
          </button>
        </div>
        <div>
          <img
            src={image}
            alt=""
            className="h-full object-cover md:mx-0 mx-auto"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 w-5/6 mx-auto my-12 md:text-start text-center">
        <div>
          <img
            src={image}
            alt=""
            className="h-full object-cover md:mx-0 mx-auto"
          />
        </div>
        <div>
          <div className="text-orangee font-semibold">MEET OUR HOST</div>
          <div className="text-4xl font-bold">JOHN DOE</div>
          <div className="my-4 italic">
            <q>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
              eum. Ducimus, perferendis voluptate! Earum quisquam impedit
            </q>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            bibendum malesuada pellentesque. Quisque id tellus sed risus
            consequat ultricies. Curabitur non fringilla velit. Vivamus sed diam
            lectus. Praesent vel nibh egestas.
          </div>

          <div>FOLLOW JOHN DOE</div>
          <div className="flex gap-4 text-xl text-orangee">
            <FaFacebookSquare />
            <FaTwitterSquare />
            <FaInstagram />
          </div>
        </div>
      </div>

      <div className="bg-gray-200 p-8">
        <div className="grid md:grid-cols-2 gap-6 w-5/6 mx-auto md:text-start text-center">
          <div>
            <img
              src={image}
              alt=""
              className="h-full object-cover md:mx-0 mx-auto"
            />
          </div>
          <div>
            <div className="text-orangee font-semibold">
              25+ YEARS OF EXPERIENCES
            </div>
            <div className="text-4xl font-bold">
              WE ARE BEST PUB AND BAR IN TOWN
            </div>
            <div className="my-4 italic">
              <q>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
                eum. Ducimus, perferendis voluptate! Earum quisquam impedit
              </q>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              bibendum malesuada pellentesque. Quisque id tellus sed risus
              consequat ultricies. Curabitur non fringilla velit. Vivamus sed
              diam lectus. Praesent vel nibh egestas.
            </div>

            <div className="grid grid-cols-2">
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-orangee" />{" "}
                <div>Lorem, ipsum dolor.</div>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-orangee" />{" "}
                <div>Lorem, ipsum dolor.</div>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-orangee" />{" "}
                <div>Lorem, ipsum dolor.</div>
              </div>
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-orangee" />{" "}
                <div>Lorem, ipsum dolor.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-center h-[80vh] text-center bg-funnel1 text-white px-6">
        <div className="max-w-[50rem]">
          <div className="text-orangee font-semibold">VENUE HIRE</div>
          <div className="text-3xl font-bold text-white">
            LET US HOST YOUR NEXT EVENT
          </div>
          <div className="my-4 italic">
            <q>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
              eum. Ducimus, perferendis voluptate! Earum quisquam impedit
            </q>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            bibendum malesuada pellentesque. Quisque id tellus sed risus
            consequat ultricies. Curabitur non fringilla velit. Vivamus sed diam
            lectus. Praesent vel nibh egestas.
          </div>

          <button className="bg-orangee text-white font-semibold text-2xl p-3 mt-6">
            Join Our Community
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 w-5/6 mx-auto my-6 md:text-start text-center">
        <div>
          <img
            src={image}
            alt=""
            className="h-full object-cover md:mx-0 mx-auto"
          />
        </div>
        <div>
          <div className="text-orangee font-semibold">
            DRINKING MORE MAKES YOU LESS ANXIOUS.
          </div>
          <div className="text-4xl font-bold">Food & Beverage</div>
          <div className="my-4 italic">
            <q>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
              eum. Ducimus, perferendis voluptate! Earum quisquam impedit
            </q>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            bibendum malesuada pellentesque. Quisque id tellus sed risus
            consequat ultricies. Curabitur non fringilla velit. Vivamus sed diam
            lectus. Praesent vel nibh egestas.
          </div>

          <button className="bg-orangee text-white font-semibold text-2xl p-3 mt-6">
            Join Our Community
          </button>
        </div>
      </div>

      <div className="bg-funnel1 text-white py-6">
        <div className="grid md:grid-cols-2 gap-6 w-5/6 mx-auto my-6 md:text-start text-center">
          <div>
            <img
              src={image}
              alt=""
              className="h-full object-cover md:mx-0 mx-auto"
            />
          </div>
          <div>
            <div className="text-orangee font-semibold">JULY 01 2023</div>
            <div className="text-4xl font-bold">Bunch Meetup Night</div>
            <div className="my-4 italic">
              <q>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
                eum. Ducimus, perferendis voluptate! Earum quisquam impedit
              </q>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              bibendum malesuada pellentesque. Quisque id tellus sed risus
              consequat ultricies. Curabitur non fringilla velit. Vivamus sed
              diam lectus. Praesent vel nibh egestas.
            </div>

            <button className="bg-orangee text-white font-semibold text-2xl p-3 mt-6">
              Join Our Community
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 w-5/6 mx-auto my-6 md:text-start text-center">
          <div>
            <img
              src={image}
              alt=""
              className="h-full object-cover md:mx-0 mx-auto"
            />
          </div>
          <div>
            <div className="text-orangee font-semibold">JULY 01 2023</div>
            <div className="text-4xl font-bold">Pool Ball Night</div>
            <div className="my-4 italic">
              <q>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
                eum. Ducimus, perferendis voluptate! Earum quisquam impedit
              </q>
            </div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              bibendum malesuada pellentesque. Quisque id tellus sed risus
              consequat ultricies. Curabitur non fringilla velit. Vivamus sed
              diam lectus. Praesent vel nibh egestas.
            </div>

            <button className="bg-orangee text-white font-semibold text-2xl p-3 mt-6">
              Join Our Community
            </button>
          </div>
        </div>
      </div>

      <Testimonials />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
        <div>
          <div className="text-4xl text-orangee font-bold">4.6</div>
          <div>Out of 5</div>
          <div className="flex gap-1 items-center text-xs text-gold mt-2 justify-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

        <div>
          <div className="text-4xl text-orangee font-bold">G</div>
          <div>1920</div>
          <div>Ratig</div>
        </div>

        <div>
          <div className="text-4xl text-orangee font-bold flex-center">
            <GiSemiClosedEye />
          </div>
          <div>960</div>
          <div>Ratings</div>
        </div>

        <div>
          <div className="text-4xl text-orangee flex-center">
            <FaFacebookSquare />
          </div>
          <div>1024</div>
          <div>Likes</div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Funnel1;
