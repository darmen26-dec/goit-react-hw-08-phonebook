import { Navigate } from 'react-router-dom';
import { useAuth } from '../redux/auth/useAuth';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

// Inny sposób

// import { selectIsLoggedIn } from '../redux/auth/selectors';
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router';

// export const RestrictedRoute = ({ component: Component, path }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   if (isLoggedIn) {
//     return <Navigate to={path} />;
//   }
//   return <Component />;
// };
