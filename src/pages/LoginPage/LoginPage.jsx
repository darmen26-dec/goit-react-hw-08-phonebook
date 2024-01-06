import { useDispatch, useSelector } from 'react-redux';
import './LoginPage.module.css';
import { login } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const form = event.currentTarget;
    dispatch(
      login({
        email,
        password,
      })
    );
    form.reset();
  };

  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="off"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
