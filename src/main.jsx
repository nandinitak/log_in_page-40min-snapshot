
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home/home.jsx'
 import { ClerkProvider } from '@clerk/clerk-react'

import App from "./App.jsx";
import { useState } from "react";
import './index.css'
import SignInPage from './auth/Sign-in/sign-in.jsx';
import { DashboardIcon } from "@radix-ui/react-icons";
import Dashboard from './dashboard/dashboard.jsx'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const router = createBrowserRouter([
  {

 element:<App/>,
 children:[
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  }
 ]
  },
  {
 path:'/auth/sign-in',
 element:<SignInPage/>
  }
])
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
   <RouterProvider router={router} />
   </ClerkProvider>
</React.StrictMode>
)
