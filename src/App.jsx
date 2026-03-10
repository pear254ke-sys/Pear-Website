import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layoutpage/Layoutpage";
import Homepage from "./pages/homepage/Homepage";
import Servicepage from "./pages/servicespage/Servicepage";
import Contactpage from "./pages/contactpage/Contactpage";
import AppsPage from "./pages/appspage/Appspage";
import { useEffect } from "react";
import { ModeProvider } from "./utils/ModeContext";
import { ThemeProvider } from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/services",
        element: <Servicepage />,
      },
      {
        path: "/contact",
        element: <Contactpage />,
      },
      {
        path: "/apps",
        element: <AppsPage />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    const slowScroll = (e) => {
      e.preventDefault();
      window.scrollBy({
        top: e.deltaY * 0.8,
        left: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", slowScroll, { passive: false });

    return () => window.removeEventListener("wheel", slowScroll);
  }, []);

  return (
    <ThemeProvider>  <ModeProvider>
    <RouterProvider router={router} />
  </ModeProvider></ThemeProvider>
  
  );
}

export default App;