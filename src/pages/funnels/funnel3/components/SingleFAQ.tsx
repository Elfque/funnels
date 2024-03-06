import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const SingleFAQ = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`border border-black my-2 ${
        open ? "border-blue-500" : "h-14"
      }`}
    >
      <div
        className={`flex justify-between p-2 border ${
          open ? "bg-blue-500 text-white " : "text-black bg-white"
        }`}
      >
        <div className={`title`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
          doloribus.
        </div>
        <TiArrowSortedDown className={``} onClick={() => setOpen(!open)} />
      </div>
      <div
        className={`detail duration-300 p-2 ${
          open ? "scale-y-100" : "scale-y-0"
        }`}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit
        omnis molestiae in et pariatur aliquam debitis dicta quas nesciunt qui
        ab repellendus ipsa nemo odio consequatur, recusandae ad cum vitae
        illum. Accusantium harum voluptatum suscipit esse possimus dicta nisi?
      </div>
    </div>
  );
};

export default SingleFAQ;
