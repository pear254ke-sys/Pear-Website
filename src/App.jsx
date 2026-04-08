import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layoutpage/Layoutpage";
import Homepage from "./pages/homepage/Homepage";
import Servicepage from "./pages/servicespage/Servicepage";
import Contactpage from "./pages/contactpage/Contactpage";
import AppsPage from "./pages/appspage/Appspage";
import { useEffect,useState } from "react";
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
  const [loading,setIsLoading]=useState(true)
  const handleLoad = () => {
    setIsLoading(false);
  };
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
  useEffect(() => {
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);
  
  return (
    <ModeProvider load={loading}>
      <RouterProvider router={router} />
  </ModeProvider>
    
  
  );
}

export default App;