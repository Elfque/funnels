const Navbar = () => {
  return (
    <div className="py-4 px-10 flex justify-between items-center text-white">
      <div className="text-2xl">LOGO</div>

      <div className="flex gap-2 font-semibold">
        <div>CALL:</div>
        <a href="tel: 000000000">00000000000</a>
      </div>
    </div>
  );
};

export default Navbar;
