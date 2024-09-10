import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from "./store.ts"
import { Provider } from 'react-redux';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App.tsx'
import { HelmetProvider } from 'react-helmet-async';
import HomeScreen from './screens/HomeScreen.tsx';
import ProductScreen from './screens/ProductScreen.tsx';
import CartScreen from './screens/CartScreen.tsx';
import LoginScreen from "./screens/LoginScreen.tsx"
import RegisterScreen from "./screens/RegisterScreen.tsx"
import ShippingScreen from "./screens/ShippingScreen.tsx"
import PrivateRoute from "./components/PrivateRoute.tsx"
import AdminRoute from "./components/AdminRoute.tsx"
import PaymentScreen from './screens/PaymentScreen.tsx';
import PlaceOrderScreen from './screens/PlaceOrderScreen.tsx';
import OrderScreen from './screens/OrderScreen.tsx';
import ProfileScreen from './screens/ProfileScreen.tsx';
import OrderListScreen from './screens/admin/OrderListScreen.tsx';
import ProductListScreen from './screens/admin/ProductListScreen.tsx';
import ProductEditScreen from './screens/admin/ProductEditScreen.tsx';
import UserListScreen from './screens/admin/UserListScreen.tsx';
import UserEditScreen from './screens/admin/UserEditScreen.tsx';


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App />}>
        <Route index={true} path='/' element={<HomeScreen />} />
        <Route index={true} path='/product/:id' element={<ProductScreen />} />
        <Route index={true} path='/cart' element={<CartScreen />} />
        <Route index={true} path='/login' element={<LoginScreen />} />
        <Route index={true} path='/register' element={<RegisterScreen />} />
        <Route path='/search/:keyword' element={<HomeScreen />} />
        <Route path='/page/:pageNumber' element={<HomeScreen />} />
        <Route path='/search/:keyword/page/:pageNumber' element={<HomeScreen />}/>
      
         {/* Registered users */}
        <Route path='' element={<PrivateRoute />}>
          <Route path='/shipping' element={<ShippingScreen />} />
          <Route path='/payment' element={<PaymentScreen />} />
          <Route path='/placeorder' element={<PlaceOrderScreen />} />
          <Route path='/order/:id' element={<OrderScreen />} />
          <Route path='/profile' element={<ProfileScreen />} />
        </Route>
         {/* Admin Routes */}
        <Route path='' element={<AdminRoute />}>
          <Route path='/admin/orderlist' element={<OrderListScreen />} />
          <Route path='/admin/productlist' element={<ProductListScreen />} />
          <Route path='/admin/product/:id/edit' element={<ProductEditScreen />} />
          <Route path='/admin/userlist' element={<UserListScreen />} />
          <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
        </Route>
      
      </Route>
    )
  )

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <HelmetProvider>
        <Provider store={store}>
          <PayPalScriptProvider deferLoading={true}>
            <RouterProvider router={router} />
          </PayPalScriptProvider>
        </Provider>
      </HelmetProvider>
  </StrictMode>
)
