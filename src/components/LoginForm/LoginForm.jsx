import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const LoginForm = () => {
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
    <Box maxW={'300px'} mx={'auto'} mt={'10'} textAlign={'center'}>
      <form onSubmit={handleLogin}>
        <FormControl mb={'10'}>
          <FormLabel htmlFor="email" textAlign={'center'}>
            Email
          </FormLabel>
          <Input id={'email'} name={'email'} type={'email'} />
        </FormControl>
        <FormControl mb={'3'}>
          <FormLabel htmlFor={'password'} textAlign={'center'}>
            Password
          </FormLabel>
          <Input
            id={'password'}
            name={'password'}
            type={'password'}
            autoComplete={'off'}
          />
          <Button type={'submit'} colorScheme={'green'} mt={'8'}>
            Login
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default LoginForm;
