import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <div>
      <div className="text-center max-w-[60rem] mx-auto mt-20 px-6">
        <div className="font-bold text-2xl md:text-6xl mb-4">
          We pride ourselves on creating happy customers
        </div>
        <div>
          Neque ut et velit dictum molestie at pellentesque aliquet magna ut
          tincidunt ullamcorper mauris mi et.
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 w-5/6 mx-auto my-6">
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  );
};

export default Testimonials;
