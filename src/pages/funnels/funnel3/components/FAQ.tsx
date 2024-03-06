import SingleFAQ from "./SingleFAQ";

const FAQ = () => {
  return (
    <div className="w-[90%] mx-auto max-w-2xl my-10">
      <div className="text-2xl md:text-6xl text-center font-bold text-blue-950 mb-4">
        Have Questions? Look Here
      </div>
      <div className="text-center text-blue-950 mb-6">
        Nam euismod enim sit amet dolor pulvinar laoreet. Nam maximus, magna ut
        eleifend pellentesque, nibh lacus
      </div>

      <SingleFAQ />
      <SingleFAQ />
      <SingleFAQ />
      <SingleFAQ />
      <SingleFAQ />
      <SingleFAQ />
    </div>
  );
};

export default FAQ;
