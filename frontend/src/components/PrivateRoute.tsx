import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReduxStoreType } from '../types/Types';

const PrivateRoute = () => {
  const { userInfo } = useSelector((state: ReduxStoreType) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
};
export default PrivateRoute;
