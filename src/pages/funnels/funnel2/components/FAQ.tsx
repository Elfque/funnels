import SingleFAQ from "./SingleFAQ";

const FAQ = () => {
  return (
    <div className="w-[90%] mx-auto max-w-2xl my-10">
      <div className="text-3xl md:text-6xl text-center font-bold text-blue-950 mb-6">
        Have Questions? Look Here
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
