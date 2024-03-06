import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <div>
      <div className="bg-blue-100 py-10 my-10">
        <div className="text-6xl text-center mb-6">What Our Guests Say</div>
        <div className="text-center">
          Nam euismod enim sit amet dolor pulvinar laoreet. Nam maximus, magna
          ut eleifend pellentesque, nibh lacus
        </div>
        <div className="grid grid-cols-3 w-5/6 mx-auto gap-4">
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
