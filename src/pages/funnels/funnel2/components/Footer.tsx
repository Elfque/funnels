const Footer = () => {
  return (
    <footer className="flex justify-between flex-col md:flex-row text-center gap-4 p-6 items-center text-white bg-[#091a31]">
      <div>Copyright 2024 YourBrand.com-All rights reserved</div>

      <div className="flex divide-x-2 divide-white">
        <div className="px-4">Privacy Policy</div>
        <div className="px-4">Terms & Conditions</div>
      </div>
    </footer>
  );
};

export default Footer;
