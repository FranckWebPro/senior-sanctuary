import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AllCountries } from "./views/AllCountries/AllCountries.jsx";
import { Country } from "./views/Country/Country.jsx";
import countries from "./data.json";

const getCountries = () => {
  return countries;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllCountries />,
        loader: () => redirect("/countries"),
      },
      {
        path: "/countries",
        element: <AllCountries />,
      },
      {
        path: "/countries/:country",
        element: <Country />,
        loader: () => getCountries(),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
