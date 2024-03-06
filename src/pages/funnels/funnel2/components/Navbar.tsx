import { useState } from "react";
import logo from "../../../../assets/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center p-4 border-b-2 border-black/20 sticky top-0 bg-white">
        <img src={logo} alt="" className="w-48" />

        <div className="md:flex gap-4 itemx-center hidden">
          <div className="funnel-2-links">Features & Benefits</div>
          <div className="funnel-2-links">100 Guaranteed</div>
          <div className="funnel-2-links">Testimonials</div>
          <div className="funnel-2-links">FAQ</div>
        </div>
        <div className="md:hidden" onClick={() => setOpenNavbar(!openNavbar)}>
          <AiOutlineMenu />
        </div>

        <div
          className={`absolute top-full itemx-center p-6 md:hidden bg-white duration-500 ${
            openNavbar ? "right-0" : "-right-80"
          }`}
        >
          <div className="funnel-2-links">Features & Benefits</div>
          <div className="funnel-2-links">100 Guaranteed</div>
          <div className="funnel-2-links">Testimonials</div>
          <div className="funnel-2-links">FAQ</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
