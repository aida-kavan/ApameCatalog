
import Main from "./pages/main.jsx";
import Notebook from "./gift/Notebook.jsx"
import Calender from "./gift/calender.jsx"
import AddSet from "./gift/adverbSet.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "notebook",
    element: <Notebook/>
  }
 
  // {
  //   path: "/Gift",
  //   element: <Gift />,
  //   children: [
  //     { path: "notebook", element: <Notebook /> }, 
  //     { path: "calender", element: <Calender /> },
  //     {path: "advertisingset", element: <AddSet/>}, 
  //   ],
  // },
                  
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
