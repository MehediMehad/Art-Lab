import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddCraftItem from "../pages/AddCraftItem";
import PrivateRoute from "../components/PrivateRoute";
import ItemDetails from "../pages/ItemDetails";
import MyArtCraft from "../components/MyArtCraft";
import AllArtCraftItems from "../pages/AllArtCraftItems";
import UpdateItem from "../pages/UpdateItem";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('http://localhost:5000/item')
        },
        {
            path:'/allCard',
            element: <PrivateRoute><AllArtCraftItems></AllArtCraftItems></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/item')
        },
        {
          path:'/item/:id',
          element:<PrivateRoute> <ItemDetails></ItemDetails> </PrivateRoute>,
          loader: () => fetch('http://localhost:5000/item')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/additem',
          element:<PrivateRoute> <AddCraftItem></AddCraftItem> </PrivateRoute>
        },
        {
          path:'/update/:id',
          element:<PrivateRoute> <UpdateItem></UpdateItem> </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/item/${params.id}`)

        },
        {
          path:'/myart',
          element:<PrivateRoute> <MyArtCraft></MyArtCraft> </PrivateRoute>
        },
      ]
    },
  ]);

export default router