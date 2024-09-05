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
// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App.tsx'
import HomeScreen from './screens/HomeScreen.tsx';
import ProductScreen from './screens/ProductScreen.tsx';
import CartScreen from './screens/CartScreen.tsx';
import LoginScreen from "./screens/LoginScreen.tsx"
import RegisterScreen from "./screens/RegisterScreen.tsx"
import ShippingScreen from "./screens/ShippingScreen.tsx"
import PrivateRoute from "./components/PrivateRoute.tsx"
import PaymentScreen from './screens/PaymentScreen.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App />}>
        <Route index={true} path='/' element={<HomeScreen />} />
        <Route index={true} path='/product/:id' element={<ProductScreen />} />
        <Route index={true} path='/cart' element={<CartScreen />} />
        <Route index={true} path='/login' element={<LoginScreen />} />
        <Route index={true} path='/register' element={<RegisterScreen />} />
      
         {/* Registered users */}
        <Route path='' element={<PrivateRoute />}>
          <Route path='/shipping' element={<ShippingScreen />} />
          <Route path='/payment' element={<PaymentScreen />} />
        </Route>
      
      </Route>
    )
  )

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
