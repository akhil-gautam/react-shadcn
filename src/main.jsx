import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import App from './App.jsx'
import './index.css'
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';

axios.defaults.baseURL = 'http://localhost:3000/api/v1';

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster toastOptions={{
      style: {
        background: '#fff',
        color: '#000',
      }
    }}/>
  </React.StrictMode>,
)
