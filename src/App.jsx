import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarWithStyling from "./components/navbar/navbarWithStyling";
import Button from "./components/button/Button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutView from "./page/AboutView";
import HomeView from "./page/HomeView";
import NotFoundView from "./page/NotFoundView";
import { LoginPage } from "./page/Login";
import { RegisterPage } from "./page/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/about",
    element: <AboutView />,
  },
  {
    path: "/not-found",
    element: <NotFoundView />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
