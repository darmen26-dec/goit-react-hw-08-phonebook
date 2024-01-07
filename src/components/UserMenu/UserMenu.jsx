import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUserName } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {userName}</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink, Outlet } from 'react-router-dom';
// import { selectIsLoggedIn, selectUserName } from '../../redux/auth/selectors';
// import { logout } from '../../redux/auth/operations';
// import './UserMenu.module.css';

// const AuthorizedNav = () => {
//   const userName = useSelector(selectUserName);
//   const dispatch = useDispatch();
//   const handleLogout = () => dispatch(logout());

//   return (
//     <>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/contacts">Contacts</NavLink>
//       Welcome, {userName}
//       <button onClick={handleLogout}>Logout</button>
//     </>
//   );
// };

// const UnAuthorizedNav = () => {
//   return (
//     <>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/register">Register</NavLink>
//       <NavLink to="/login">Login</NavLink>
//     </>
//   );
// };

// export const UserMenu = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return (
//     <div>
//       {isLoggedIn ? <AuthorizedNav /> : <UnAuthorizedNav />}
//       <Outlet />
//     </div>
//   );
// };

// to rozwiązanie jakby zawiera w sobie 4 komponenty, Navigation, AuthNav, UserMenu i AppBar
