import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/OrderPage/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PrivatePage from "../Pages/PrivatePage/PrivatePage";
import Dashboard from "./Dashboard/Dashboard/Dashboard";
import Cart from "./Dashboard/Cart/Cart";
import AllUsers from "./Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/private",
        element: (
          <PrivateRoute>
            <PrivatePage></PrivatePage>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/cart',
        element: <Cart></Cart>,
      },


      // ------Admin Routes
      {
        path: '/dashboard/users',
        element: <AllUsers></AllUsers>,
      },
      
    ]
  }
]);
