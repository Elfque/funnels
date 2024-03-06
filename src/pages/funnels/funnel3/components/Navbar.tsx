import { useState } from "react";
import logo from "../../../../assets/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <div className=" sticky top-0">
      <div className="flex justify-between items-center p-4 border-b-2 border-black/20 bg-neutral-800">
        <img src={logo} alt="" className="w-48" />

        <div className="md:flex gap-4 items-center hidden">
          <div className="funnel-3-links">About</div>
          <div className="funnel-3-links">Facilities</div>
          <div className="funnel-3-links">Gallery</div>
          <div className="funnel-3-links">Testimonials</div>
          <button className="p-2 text-sm font-semibold text-white rounded-md bg-orangee">
            CALL TO ACTION
          </button>
        </div>
        <div className="md:hidden" onClick={() => setOpenNavbar(!openNavbar)}>
          <AiOutlineMenu />
        </div>

        <div
          className={`absolute top-full itemx-center p-6 md:hidden bg-white duration-500 ${
            openNavbar ? "right-0" : "-right-80"
          }`}
        >
          <div className="funnel-2-links">About</div>
          <div className="funnel-2-links">Facilities</div>
          <div className="funnel-2-links">Gallery</div>
          <div className="funnel-2-links">Testimonials</div>
          <button className="p-2 text-sm font-semibold text-white rounded-md bg-orangee">
            CALL TO ACTION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
