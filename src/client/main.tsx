import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import { Toaster } from '@/components/ui/toaster';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path:"home",
    element: <Home/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </React.StrictMode>,
)
