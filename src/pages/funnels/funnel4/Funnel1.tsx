const Funnel1 = () => {
  return (
    <div>
      <header>
        <div className="flex-between">
          <div className="logo">LOGO</div>
          <div className="flex items-center">
            CALL US:
            <a href="tel: +0000 0000 0000 00"></a>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-6 w-5/6 mx-auto">
        <div>
          <div className="text-orangee">WELCOME TO</div>
          <div className="text-3xl">JOHN’S BAR & CAFE</div>
          <q>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            eum. Ducimus, perferendis voluptate! Earum quisquam impedit
          </q>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            bibendum malesuada pellentesque. Quisque id tellus sed risus
            consequat ultricies. Curabitur non fringilla velit. Vivamus sed diam
            lectus. Praesent vel nibh egestas.
          </div>

          <button className="bg-transparent border-2 border-black p-2">
            JOIN OUR COMMUNITY{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Funnel1;
