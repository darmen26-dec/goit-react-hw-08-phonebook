import LoginForm from 'components/LoginForm/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Center, Box, Heading, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function LoginPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <Container maxW={'2xl'} centerContent>
        <Center>
          <Box padding={'6'} mt={'10'}>
            <Heading as={'h1'} mb={'4'} textAlign={'center'}>
              Login
            </Heading>
            <LoginForm />
            <Box textAlign={'center'}>
              <Text>
                Don't have an account?{' '}
                <NavLink to="/register" style={{ textDecoration: 'underline' }}>
                  Register here
                </NavLink>
              </Text>
            </Box>
          </Box>
        </Center>
      </Container>
    </HelmetProvider>
  );
}
