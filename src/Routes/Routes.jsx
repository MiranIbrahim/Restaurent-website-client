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
import AdminRoute from "../PrivateRoute/AdminRoute";
import AddItems from "./Dashboard/AddItems/AddItems";
import ManageItems from "./Dashboard/ManageItems/ManageItems";
import UpdateItems from "./Dashboard/UpdateItems/UpdateItems";
import Payment from "./Dashboard/Payment/Payment";
import PaymentHistory from "./Dashboard/Payment/PaymentHistory";

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
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      // ------Admin Routes
      {
        path: "/dashboard/users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/updateItems/:id",
        element: (
          <AdminRoute>
            <UpdateItems></UpdateItems>
          </AdminRoute>
        ),
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`),
        
      },
    ],
  },
]);
