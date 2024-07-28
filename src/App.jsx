import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const routing = createBrowserRouter([
  { path: "", element: <Home></Home> },
  { path: "about", element: <About></About> },
  { path: "contact", element: <Contact></Contact> },
  { path: "portfolio", element: <Portfolio></Portfolio> },
]);

function App() {
  return (
    <>
      {/* <RouterProvider router={routing} /> */}

      <Contact/>

      {/* <Home></Home> */}

      {/* <About></About> */}
    
    </>
  );
}

export default App;
