import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListCocktail from "./ListCocktail/ListCocktail";
import RandomCocktail from "./RandomCocktail/RandomCocktail";
import Header from "./Header";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ListCocktail />,
  },
  {
    path: "/random",
    element: <RandomCocktail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);
