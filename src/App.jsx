import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

const routing = createBrowserRouter(
  [
    {element: <Layout />, children: [
        { path: "", element: <Home></Home> },
        { path: "about", element: <About></About> },
        { path: "contact", element: <Contact></Contact> },
        { path: "portfolio", element: <Portfolio></Portfolio> },

      ]}
  ]
);

function App() {
  return (
    <>

      <RouterProvider router={routing} ></RouterProvider>

    </>
  );
}

export default App;
