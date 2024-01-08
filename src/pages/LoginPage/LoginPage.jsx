import { useDispatch } from 'react-redux';
import './LoginPage.module.css';
import { login } from '../../redux/auth/operations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    dispatch(
      login({
        email,
        password,
      })
    );
  };

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
