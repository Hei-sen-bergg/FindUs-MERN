import Layout from "../src/routes/LayoutStyle/LayoutStyle";
import Home from "./routes/Home/Home";
import ListPage from "./routes/ListPage/ListPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SinglePage from "./routes/SinglePage/SinglePage";
import ProfilePage from "./routes/ProfilePage/ProfilePage";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },

      ]
    }
  ]);

  return (

    <RouterProvider router={router}/>
  );
}

export default App;
