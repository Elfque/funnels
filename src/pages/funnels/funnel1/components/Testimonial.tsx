import { FaStar } from "react-icons/fa";
import person from "../../../../assets/1.png";

const Testimonial = () => {
  return (
    <div>
      <div className="flex gap-4 items-center p-4 border-2 border-black">
        <img src={person} alt="" className="w-16 h-16 rounded-full" />
        <div>
          <q>
            Proin nulla mauris et volutpat adipiscing suspendisse vehicula
            blandit sagittis orci etiam morbi elit.
          </q>
          <div className="font-semibold text-xs">Jane Doe</div>
          <div className="flex gap-1 items-center text-xs text-gold">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
