import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Center, Box, Heading, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <Container maxW={'2xl'} centerContent>
        <Center>
          <Box padding={'6'} mt={'10'}>
            <Heading as={'h1'} mb={'4'} textAlign={'center'}>
              Register
            </Heading>
            <RegisterForm />
            <Box textAlign={'center'}>
              <Text>
                Do you have account?{' '}
                <NavLink to="/login" style={{ textDecoration: 'underline' }}>
                  Log in
                </NavLink>
              </Text>
            </Box>
          </Box>
        </Center>
      </Container>
    </HelmetProvider>
  );
}
