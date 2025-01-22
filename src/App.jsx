import Banner from "./pages/banner.jsx";
import Cup from "./pages/cup.jsx";
import Digital from "./pages/digital.jsx";
import Dtf from "./pages/dtf.jsx";
import Gift from "./pages/gift.jsx";
import Label from "./pages/label.jsx";
import Laser from "./pages/laser.jsx";
import Social from "./pages/social.jsx";
import Website from "./pages/website.jsx";
import Main from "./pages/main.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/Banner",
    element: <Banner />,
  },
  {
    path: "/Cup",
    element: <Cup />,
  },
  {
    path: "/Digital",
    element: <Digital />,
  },
  {
    path: "/Dtf",
    element: <Dtf />,
  },
  {
    path: "/Gift",
    element: <Gift />,
  },
  {
    path: "/Label",
    element: <Label />,
  },
  {
    path: "/Laser",
    element: <Laser />,
  },
  {
    path: "/Social",
    element: <Social />,
  },
  {
    path: "/Website",
    element: <Social />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
