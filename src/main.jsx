import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './routers/Home';
import About from './routers/About';
import Mission from './routers/Mission';
import Projects from './routers/Projects';
import Teams from './routers/Teams';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "mission",
        element: <Mission />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "team",
        element: <Teams />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={123} />
  </React.StrictMode>
);