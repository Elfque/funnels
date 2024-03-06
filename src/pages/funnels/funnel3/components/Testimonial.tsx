import { FaStar } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <div className="flex gap-1 items-center text-xs text-gold">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className="text-sm my-4">
        Molestie cras ullamcorper purus sit risus, commodo ut arcu orci lacus,
        odio luctus augue bibendum pharetra augue bibendum pharetra.
      </div>

      <div className="flex items-center gap-4">
        <img
          src="https://cffunnelstemplates.com/demo/n-95-mask/assets/images/avatar-01.png"
          alt=""
          className=""
        />
        <div className="mt-4 text-center text-md font-semibold">Jane Doe</div>
      </div>
    </div>
  );
};

export default Testimonial;
