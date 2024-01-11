import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Box, Heading, Text } from '@chakra-ui/react';

const ContactsPage = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
        <Box maxW={'320px'} mx={'auto'} mt={'10'} textAlign={'center'}>
          <Heading as={'h1'} textAlign={'center'} fontSize={'4xl'}>
            Phonebook
          </Heading>
          <ContactForm />
          <Heading as={'h2'} textAlign={'center'} fontSize={'2xl'}>
            Contacts
          </Heading>
          <Text fontSize={'sm'} textAlign={'center'}>
            Find contact by name
          </Text>
          <Filter />
          <ContactList />
        </Box>
      </HelmetProvider>
    </>
  );
};

export default ContactsPage;
