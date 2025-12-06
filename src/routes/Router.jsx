import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../home/HomePage";
import Loading from "../pages/Loading";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";
import PetsSupplies from "../components/PetsSupplies";
import CardDetailsPage from "../pages/CardDetailsPage";
import axios from "axios";
import PrivateRoute from "./PrivateRoute";
import AddListing from "../pages/AddListing";
import MyListing from "../pages/MyListing";
import MyOrder from "../pages/MyOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/register",
        element: <Register></Register>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/pets-supplies",
        element: <PetsSupplies></PetsSupplies>,
        loader: async () => {
          const { data } = await axios.get("http://localhost:3000/listing");
          return data;
        },
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/card-details/:_id",
        element: (
          <PrivateRoute>
            <CardDetailsPage></CardDetailsPage>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const { data } = await axios.get("http://localhost:3000/listing");
          return data.find((item) => item._id === params._id);
        },
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/register",
        element: <Register></Register>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/add-listing",
        element: (
          <PrivateRoute>
            <AddListing></AddListing>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/my-listing",
        element: (
          <PrivateRoute>
            <MyListing></MyListing>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrder></MyOrder>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
]);

export default router;
