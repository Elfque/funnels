import logo from "../../../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-center text-neutral-500 font-semibold py-10 border-t-4 border-blue-600">
      <div className="flex justify-center  items-center">
        <img src={logo} alt="" className="w-48" />
      </div>

      <div className="my-6 text-lg w-5/6 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        fringilla consectetur metus at scelerisque. Nam mattis felis quis
        sollicitudin cursus. Suspendisse potenti. Vestibulum ante ipsum primis
        in faucibus orci luctus.
      </div>
      <div>© Copyright YourBrand.com All rights reserved</div>
    </footer>
  );
};

export default Footer;
