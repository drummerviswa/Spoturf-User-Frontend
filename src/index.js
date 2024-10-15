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

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
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
