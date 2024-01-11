import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchContacts,
  deleteAsyncContact,
} from '../../redux/contacts/operations';
import { getContacts, getFilter } from '../../redux/contacts/selectors';
import { Flex, UnorderedList, ListItem, Text, Button } from '@chakra-ui/react';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterStatus = useSelector(getFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterStatus.status.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const deleteContactById = contactId => {
    try {
      dispatch(deleteAsyncContact(contactId));
    } catch (error) {
      console.error('Error deleting contact:', error.message);
    }
  };

  return (
    <Flex alignItems={'center'} direction={'column'}>
      <UnorderedList styleType={'none'} p={'5'}>
        {filteredContacts.map(contact => (
          <ListItem
            key={contact.id}
            display={'flex'}
            flexWrap={'nowrap'}
            alignItems={'center'}
            mb={'4'}
          >
            <Text
              minW={'160px'}
              fontSize={'sm'}
              textAlign={'left'}
              fontWeight={'semibold'}
            >
              {contact.name}
            </Text>
            <Text
              minW={'90px'}
              fontSize={'xs'}
              color={'gray.500'}
              ml={'20px'}
              mr={'30px'}
            >
              {contact.number}
            </Text>
            <Button
              minW={'70px'}
              fontSize={'xs'}
              _hover={{ transform: 'scale(1.2)' }}
              onClick={() => deleteContactById(contact.id)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </UnorderedList>
    </Flex>
  );
};

export default ContactList;
