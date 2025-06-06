import {
  createBrowserRouter
} from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AuthLayout from "../layouts/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
        {
            index: true,
            Component: Home
        }

    ]
  },
  {
      path: '/auth',
      Component: AuthLayout,
      children: [
        {
            path: '/auth/login',
            Component: Login
        },
        {
            path: '/auth/register',
            Component: Register
        }
      ]
  }
]);