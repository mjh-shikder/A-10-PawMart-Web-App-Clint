import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../home/HomePage";
import Loading from "../pages/Loading";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";

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
            path: '/login',
            element: <LoginPage></LoginPage>,
            hydrateFallbackElement: <Loading></Loading>,
        },
        {
            path: '/register',
            element: <Register></Register>,
            hydrateFallbackElement: <Loading></Loading>,
        }
    ],
    },
    
]);

export default router;