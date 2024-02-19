import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddMeal from "../Layout/Pages/Dashboard/AddMeal/AddMeal";
import AdminProfile from "../Layout/Pages/Dashboard/AdminProfile/AdminProfile";
import AllMeals from "../Layout/Pages/Dashboard/AllMeals/AllMeals";
import AllReviews from "../Layout/Pages/Dashboard/AllReviews/AllReviews";
import Dashboard from "../Layout/Pages/Dashboard/Dashboard";
import ManageUsers from "../Layout/Pages/Dashboard/ManageUsers/ManageUsers";
import Home from "../Layout/Pages/Home/Home";
import Login from "../Layout/Pages/JoinUs/Login";
import Register from "../Layout/Pages/JoinUs/Register";

import Checkout from "../Layout/Pages/CheckoutPage/Checkout";
import Contact from "../Layout/Pages/Contact/Contact";
import UpdateMeal from "../Layout/Pages/Dashboard/AllMeals/UpdateMeal";
import Analytics from "../Layout/Pages/Dashboard/Analytics/Analytics";
import RequestedMeals from "../Layout/Pages/Dashboard/RequestedMeals/RequestedMeals";
import ServeMeals from "../Layout/Pages/Dashboard/ServeMeals/ServeMeals";
import UpcomingMeals from "../Layout/Pages/Dashboard/UpcomingMeals/UpcomingMeals";
import UserProfile from "../Layout/Pages/Dashboard/UserProfile/UserProfile";
import UpdateReview from "../Layout/Pages/Dashboard/UserReviews/UpdateReview";
import UserReviews from "../Layout/Pages/Dashboard/UserReviews/UserReviews";
import ErrorPage from "../Layout/Pages/ErrorPage/ErrorPage";
import MealDetail from "../Layout/Pages/Home/MealsByCategory/MealDetails/MealDetail";
import MealPage from "../Layout/Pages/MealsPage/MealPage";
import AllUpcomingMeals from "../Layout/Pages/UpcomingMealsPage/AllUpcomingMeals";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            {" "}
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: <MealDetail></MealDetail>,
        loader: ({ params }) =>
          fetch(
            `https://hostel-management-server-six.vercel.app/meals/${params.id}`
          ),
      },
      {
        path: "/allMeals",
        element: <MealPage></MealPage>,
      },
      {
        path: "/upcomingMeals",
        element: <AllUpcomingMeals></AllUpcomingMeals>,
      },
      {
        path: "/checkout/:planName",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hostel-management-server-six.vercel.app/plans/${params.planName}`
          ),
      },
    ],
  },

  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // admin routes
      {
        path: "adminProfile",
        element: (
          <AdminRoute>
            <AdminProfile></AdminProfile>
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            {" "}
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addMeal",
        element: (
          <AdminRoute>
            <AddMeal></AddMeal>
          </AdminRoute>
        ),
      },
      {
        path: "allMeals",
        element: (
          <AdminRoute>
            <AllMeals></AllMeals>
          </AdminRoute>
        ),
      },
      {
        path: "allReviews",
        element: (
          <AdminRoute>
            <AllReviews></AllReviews>
          </AdminRoute>
        ),
      },
      {
        path: "serveMeals",
        element: (
          <AdminRoute>
            {" "}
            <ServeMeals></ServeMeals>
          </AdminRoute>
        ),
      },
      {
        path: "upcomingMeals",
        element: (
          <AdminRoute>
            {" "}
            <UpcomingMeals></UpcomingMeals>
          </AdminRoute>
        ),
      },
      {
        path: "analytics",
        element: (
          <AdminRoute>
            {" "}
            <Analytics></Analytics>
          </AdminRoute>
        ),
      },

      // user routes
      {
        path: "userProfile",
        element: (
          <PrivateRoute>
            {" "}
            <UserProfile></UserProfile>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "requestedMeals",
        element: <RequestedMeals></RequestedMeals>,
      },
      {
        path: "userReviews",
        element: (
          <PrivateRoute>
            <UserReviews></UserReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "updateReview/:id",
        element: (
          <PrivateRoute>
            {" "}
            <UpdateReview></UpdateReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hostel-management-server-six.vercel.app/reviews/${params.id}`
          ),
      },
      {
        path: "updateMeal/:id",
        element: (
          <PrivateRoute>
            <UpdateMeal></UpdateMeal>{" "}
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hostel-management-server-six.vercel.app/meals/${params.id}`
          ),
      },
    ],
  },
]);
