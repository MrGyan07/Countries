import Headers from "./components/Header";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/contact.jsx";
import App from "./App";
import Home from "./components/Home.jsx";
import Error from "./components/Error.jsx";
import CountryDetail from "./components/CountryDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/:country",
        element: <CountryDetail />,
      },
    ],
  },
]);

const root = createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={router} />);
