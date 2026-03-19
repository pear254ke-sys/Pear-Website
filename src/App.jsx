import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layoutpage/Layoutpage";
import Homepage from "./pages/homepage/Homepage";
import Servicepage from "./pages/servicespage/Servicepage";
import Contactpage from "./pages/contactpage/Contactpage";
import AppsPage from "./pages/appspage/Appspage";
import { useEffect } from "react";
import { ModeProvider } from "./utils/ModeContext";


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
    <div className="body">  <ModeProvider>
      <div className="main"><RouterProvider router={router} /></div>
  </ModeProvider></div>
    
  
  );
}

export default App;