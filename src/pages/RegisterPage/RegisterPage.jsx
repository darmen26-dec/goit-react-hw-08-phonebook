import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';
// import { Navigate } from 'react-router-dom';
import './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleRegistration = event => {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const form = event.currentTarget;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    // form.reset();
  };

  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  //   if (isLoggedIn) {
  //     return <Navigate to="/contacts" />;
  //   }

  return (
    <div>
      <form onSubmit={handleRegistration}>
        <label htmlFor="username">Username</label>
        <input id="username" name="username" />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="off"
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
