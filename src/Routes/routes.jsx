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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
        {
            index: true,
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
          loader: ({params})=> fetch(`http://localhost:5000/addVolunteerNeedPost/${params.postId}`),
          element: <PrivateRoute>
            <VolunteerNeedPostDetails/>
          </PrivateRoute>
        },

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