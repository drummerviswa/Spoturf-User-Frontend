import React, { useContext } from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
//REVIEW - Guys review on this import on react-toastify
import { ToastContainer } from "react-toastify";
import { AuthContext, AuthContextProvider } from "./context/authContext";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Home from "./pages/home/Home";
import Preference from "./pages/Preference";
import Carousel from "./components/Carousel";
import ListingPage from "./pages/listing/ListingPage";
import TurfDetails from "./pages/listing/TurfDetails";
import BookinPage from "./pages/booking/BookinPage";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  // if (!currentUser) {
  //   return <Navigate to="/login" />;
  // }
  return children;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Outlet />
        <ToastContainer style={{ marginTop: 80 }} />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <App />,
        children: [
          {
            path: "/",
            element: <Home />,
            children: [
              {
                path: "/",
                element: <Carousel />,
              },
              {
                path: "/listing",
                element: <ListingPage />,
              },
              {
                path: "/listing/:id",
                element: <TurfDetails />,
              },
              {
                path: "/booking",
                element: <BookinPage />,
              },
            ],
          },
          {
            path: "preference",
            element: <Preference />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </AuthContextProvider>
);
