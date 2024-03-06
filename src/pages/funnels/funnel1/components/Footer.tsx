import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-funnel1 text-white py-10 bg-fixed">
        <div className="text-center text-white">
          <FaInstagram className="text-6xl mx-auto" />
          <div className="text-2xl md;text-6xl font-bold">#YourBrandName</div>
          <div className="text-2xl my-6">Take Selfie & Get 25% OFF flat</div>
          <div className="max-w-lg mx-auto">
            Etiam luctus turpis urna, at pretium nisl suscipit id. Vestibulum
            tortor lorem, suscipit scelerisque egestas sed, tempus non velit.
          </div>

          <button className="bg-orangee text-white font-semibold text-2xl p-3 mt-6">
            Join Our Community
          </button>
        </div>
      </div>
      <div className="bg-neutral-900 p-4 flex justify-between items-center text-white">
        <div className="text-2xl">LOGO</div>

        <div className="flex gap-2">
          <div className="flex gap-2 items-center">
            <FaFacebookSquare />
            Facebook
          </div>
          <div className="flex gap-2 items-center">
            <FaInstagram />
            Instagram
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
