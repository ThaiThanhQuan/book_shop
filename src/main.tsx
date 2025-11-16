import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from '@/layout'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AboutPage from 'pages/client/book';
import BookPage from 'pages/client/book';
import HomePage from 'pages/client/home';
import LoginPage from '@/pages/client/auth/Login/login';
import RegisterPage from '@/pages/client/auth/Register/register';
import { App } from 'antd';
import 'styles/global.scss'
import { AppProvider } from 'components/context/app.context';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/book",
        element: <div><BookPage /></div>
      },
      {
        path: "/about",
        element: <div><AboutPage /></div>
      },
    ]
  },
  {
    path: "/login",
    element: <div><LoginPage /></div>
  },
  {
    path: "/register",
    element: <div><RegisterPage /></div>
  }

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <AppProvider>
      <RouterProvider router={router} />
      </AppProvider>
    </App>
  </StrictMode>,
)
