import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6">
        <div>
          <div className="text-xl">Funnel 1</div>
          <div className="text-md text-blue-600">
            <Link to={"/funnel1/optin"}>Optin</Link>
          </div>
          <div className="text-md text-blue-600">
            <Link to={"/funnel1/order"}>Order</Link>
          </div>
          <div className="text-md text-blue-600">
            <Link to={"/funnel1/upsell"}>Upsell</Link>
          </div>
          <div className="text-md text-blue-600">
            <Link to={"/funnel1/downsell"}>Downsell</Link>
          </div>
        </div>

        <div>
          <div className="text-xl">Funnel 2</div>
          <div className="text-md text-blue-600">
            <Link to={"/funnel2/optin"}>Optin</Link>
          </div>
          <div className="text-md text-blue-600">
            <Link to={"/funnel2/order"}>Order</Link>
          </div>
          <div className="text-md text-blue-600">
            <Link to={"/funnel2/upsell"}>Upsell</Link>
          </div>
          <div className="text-md text-blue-600">
            <Link to={"/funnel2/downsell"}>Downsell</Link>
          </div>
        </div>

        <div>
          <div className="text-xl">Funnel 3</div>
          <div className="text-md text-blue-600">
            <Link to={"/funnel3/optin"}>Optin</Link>
          </div>
          <div className="text-md text-blue-600">
            <Link to={"/funnel3/order"}>Order</Link>
          </div>
          <div className="text-md text-blue-600">
            <Link to={"/funnel3/upsell"}>Upsell</Link>
          </div>
          <div className="text-md text-blue-600">
            <Link to={"/funnel3/downsell"}>Downsell</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
