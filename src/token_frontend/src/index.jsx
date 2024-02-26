import ReactDOM from 'react-dom'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import App from "./components/App";
import About from './components/About';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
// const init = async () => {
//   ReactDOM.render(, document.getElementById("root"));
// }

// init();