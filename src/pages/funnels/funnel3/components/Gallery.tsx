const Gallery = () => {
  return (
    <div>
      <div className="text-center mb-8">
        <div className="mb-2 text-5xl">Our Gallery</div>
        <div className="text-blue-950">
          Nam euismod enim sit amet dolor pulvinar laoreet. Nam maximus, magna
          ut eleifend pellentesque, nibh lacus
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-5/6 mx-auto">
        <img
          src="https://cffunnelstemplates.com/demo/trip-reservation/assets/img/gallery1.webp"
          alt=""
          className="mx-auto"
        />
        <img
          src="https://cffunnelstemplates.com/demo/trip-reservation/assets/img/gallery2.webp"
          alt=""
          className="mx-auto"
        />
        <img
          src="https://cffunnelstemplates.com/demo/trip-reservation/assets/img/gallery3.webp"
          alt=""
          className="mx-auto"
        />
        <img
          src="https://cffunnelstemplates.com/demo/trip-reservation/assets/img/gallery4.webp"
          alt=""
          className="mx-auto"
        />
        <img
          src="https://cffunnelstemplates.com/demo/trip-reservation/assets/img/gallery5.webp"
          alt=""
          className="mx-auto"
        />
        <img
          src="https://cffunnelstemplates.com/demo/trip-reservation/assets/img/gallery6.webp"
          alt=""
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default Gallery;
