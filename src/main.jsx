
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 

import App from "./App.jsx";

import './index.css'
import SignInPage from './auth/Sign-in/sign-in.jsx';

const router = createBrowserRouter([
  {
path:'/',
 element:<App/>
  },
  {
 path:'/auth/sign-in',
 element:<SignInPage/>
  }
])
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
    <App />
  </React.StrictMode>,
)
