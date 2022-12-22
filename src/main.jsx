import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routers/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <div>about</div>,
  },
]);

const NavItem = ({ text, url }) => <button className="font-medium mx-3 inline">{text}</button>;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="mx-auto pt-2">
      <div className='mx-auto max-w-5xl flex items-center'>
        <img src="/logo.svg" className="h-20 p-4 inline right" />
        <div className="text-2xl font-medium">NCKU ISP</div>
        <div className='mr-0 ml-auto hidden lg:block xl:block 2xl:block'>
          <NavItem text="About Us" />
          <NavItem text="Teams" />
          <NavItem text="Mission" />
          <NavItem text="Projects" />
          <button className="font-semibold mx-3 p-2 rounded-md inline bg-blue-500 hover:bg-blue-600">Support Us</button>
        </div>
        <div className='mr-0 ml-auto block lg:hidden xl:hidden 2xl:hidden'>
          <button className="font-semibold mx-3 p-2 rounded-md inline">
            <i className="gg-menu-right"></i>
          </button>
        </div>
      </div>
    </div>
    <div className='p-5'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);