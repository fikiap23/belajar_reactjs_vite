import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './components/Pages/login.jsx'
import RegisterPage from './components/Pages/register.jsx'
import ErrorPage from './components/Pages/404'
import ProductsPage from './components/Pages/products'
import ProfilePage from './components/Pages/profile'
import DetailProductPage from './components/Pages/detailProduct'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar from './components/Layouts/Navbar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/product/:id',
    element: <DetailProductPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Navbar />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
