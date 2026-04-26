import {createBrowserRouter, RouterProvider } from "react-router-dom";

import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';


import {useContext } from "react";
import Data from "./context/Data";
import "./theme.css"
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Page Not Found</h1>,
  },
    {
    path: "/signin",
    element: <SignIn />,
  },  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
]);

console.log("App.js is running");
function App() {
  const {theme} = useContext(Data);
  
  return (
  <div>
        <div className={`${theme}`}> 
          <RouterProvider router={router} />
        </div>
  </div>
  );
}

export default App;
