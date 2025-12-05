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
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/card-details/:_id",
        element: <CardDetailsPage></CardDetailsPage>,
        loader: async ({ params }) => {
          const { data } = await axios.get("http://localhost:3000/listing");
          return data.find((item) => item._id === params._id);
        },
        hydrateFallbackElement: <Loading></Loading>,
        },
        {
            path: '/login',
            element: <LoginPage></LoginPage>,
            hydrateFallbackElement: <Loading></Loading>,
        },
        {
            path: '/register',
            element: <Register></Register>,
            hydrateFallbackElement: <Loading></Loading>,
        },
    ],
  },
]);

export default router;
