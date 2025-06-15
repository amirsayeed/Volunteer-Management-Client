import {
  createBrowserRouter
} from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AuthLayout from "../layouts/AuthLayout";
import AddVolunteerNeedPost from "../pages/AddVolunteerNeedPost/AddVolunteerNeedPost";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../components/Shared/Loading/Loading";
import AllVolunteerNeedPosts from "../pages/AllVolunteerNeedPosts/AllVolunteerNeedPosts";
import VolunteerNeedPostDetails from "../pages/VolunteerNeedPostDetails/VolunteerNeedPostDetails";
import ManageMyPosts from "../pages/ManageMyPosts/ManageMyPosts";
import UpdateVolunteerNeedPost from "../pages/UpdateVolunteerNeedPost/UpdateVolunteerNeedPost";
import ErrorPage from "../components/Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            index: true,
            loader: ()=>fetch('https://volunteer-management-server-tawny.vercel.app/volunteerNeedsNow'),
            hydrateFallbackElement: <Loading/>,
            Component: Home
        },
        {
          path: 'addVolunteerNeedPost',
          element: <PrivateRoute><AddVolunteerNeedPost/></PrivateRoute>
        },
        {
          path: 'allVolunteerNeedPosts',
          Component: AllVolunteerNeedPosts
        },
        {
          path: 'manageMyPosts',
          element: <PrivateRoute><ManageMyPosts/></PrivateRoute>
        },
        {
          path: 'volunteerNeedPost/:postId',
          element: <PrivateRoute>
            <VolunteerNeedPostDetails/>
          </PrivateRoute>
        },
        {
          path: 'updateVolunteerNeedPost/:postId',
          element: <PrivateRoute>
            <UpdateVolunteerNeedPost/>
          </PrivateRoute>
        }

    ]
  },
  {
      path: '/auth',
      Component: AuthLayout,
      errorElement: <ErrorPage/>,
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