import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <div>
      <div className="bg-gray-100 py-6">
        <div className="text-2xl md:text-6xl text-center font-bold text-blue-950 mb-6">
          Testimonials
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 w-5/6 mx-auto gap-4">
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
