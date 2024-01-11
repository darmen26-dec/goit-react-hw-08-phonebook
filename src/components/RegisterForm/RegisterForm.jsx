import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleRegistration = event => {
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
  };

  return (
    <Box maxW={'300px'} mx={'auto'} mt={'10'} textAlign={'center'}>
      <form onSubmit={handleRegistration}>
        <FormControl mb={'5'}>
          <FormLabel htmlFor={'username'} textAlign={'center'}>
            Username
          </FormLabel>
          <Input id={'username'} name={'username'} />
        </FormControl>
        <FormControl mb={'5'}>
          <FormLabel htmlFor={'email'} textAlign={'center'}>
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
            Register
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default RegisterForm;
