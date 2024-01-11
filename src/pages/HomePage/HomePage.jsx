import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Center, Box, Heading } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Container maxW={'2xl'} centerContent>
          <Center>
            <Box padding={'100px'} mt={'10'}>
              <Heading as={'h2'} fontSize={'xl'} mb={'4'}>
                Contacts manager welcome page{' '}
                <span role={'img'} aria-label={'Greeting icon'}>
                  💁‍♀️
                </span>
              </Heading>
            </Box>
          </Center>
        </Container>
      </HelmetProvider>
    </>
  );
};

export default HomePage;
