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

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App />}>
        <Route index={true} path='/' element={<HomeScreen />} />
        <Route index={true} path='/product/:id' element={<ProductScreen />} />
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
