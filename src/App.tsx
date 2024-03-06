import Downsell from "./pages/funnels/funnel1/Downsell";
import Funnel1 from "./pages/funnels/funnel1/Funnel1";
import Order from "./pages/funnels/funnel1/Order";
import Upsell from "./pages/funnels/funnel1/Upsell";

import Funnel2Optin from "./pages/funnels/funnel2/Optin";
import Funnel2Upsell from "./pages/funnels/funnel2/Upsell";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Funnel3Optin from "./pages/funnels/funnel3/Optin";
import Funnel3Upsell from "./pages/funnels/funnel3/Upsell";
import Funnel3Downsell from "./pages/funnels/funnel3/Downsell";
import Funnel3Order from "./pages/funnels/funnel3/Order";
import Funnel2Order from "./pages/funnels/funnel2/Order";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <div className="w-screen overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="funnel1">
            <Route path="optin" element={<Funnel1 />} />
            <Route path="downsell" element={<Downsell />} />
            <Route path="upsell" element={<Upsell />} />
            <Route path="order" element={<Order />} />
          </Route>

          <Route path="funnel2">
            <Route path="optin" element={<Funnel2Optin />} />
            <Route path="downsell" element={<Downsell />} />
            <Route path="upsell" element={<Funnel2Upsell />} />
            <Route path="order" element={<Funnel2Order />} />
          </Route>

          <Route path="funnel3">
            <Route path="optin" element={<Funnel3Optin />} />
            <Route path="downsell" element={<Funnel3Downsell />} />
            <Route path="order" element={<Funnel3Order />} />
            <Route path="upsell" element={<Funnel3Upsell />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
