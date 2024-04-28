import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddCraftItem from "../pages/AddCraftItem";
import PrivateRoute from "../components/PrivateRoute";
import ItemDetails from "../pages/ItemDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>,
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
      ]
    },
  ]);

export default router