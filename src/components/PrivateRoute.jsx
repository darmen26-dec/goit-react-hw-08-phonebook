import { Navigate } from 'react-router-dom';
import { useAuth } from '../redux/auth/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

// Inny sposób

// import { selectIsLoggedIn } from '../redux/auth/selectors';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router';

// export const PrivateRoute = ({ component: Component, path }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   if (isLoggedIn) {
//     return <Component />;
//   }
//   return <Navigate to={path} />;
// };
