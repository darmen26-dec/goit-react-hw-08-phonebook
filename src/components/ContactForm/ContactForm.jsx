import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAsyncContact } from '../../redux/contacts/operations';
import Notiflix from 'notiflix';
import { getContacts } from '../../redux/contacts/selectors';
import { FormControl, FormLabel, Input, Flex, Button } from '@chakra-ui/react';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = formData;

    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExists) {
      Notiflix.Notify.warning(`${name} already exists in contacts.`);
      return;
    }

    dispatch(addAsyncContact({ name, number }));
    setFormData({ name: '', number: '' });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl mt={'35px'}>
        <FormLabel htmlFor={'name'} textAlign={'center'}>
          Name
          <Input
            variant={'filled'}
            id={'name'}
            type={'text'}
            name={'name'}
            autoComplete={'off'}
            pattern={'[A-Za-zÀ-ÖØ-öø-ÿ]+[s]?[A-Za-zÀ-ÖØ-öø-ÿ]+'}
            title={
              "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            }
            required
            value={formData.name}
            onChange={handleChange}
            placeholder={'Adrian Smith'}
            mt={'10px'}
          />
        </FormLabel>
      </FormControl>
      <FormControl mt={'35px'} mb={'45px'}>
        <FormLabel htmlFor={'number'} textAlign={'center'}>
          Number
          <Input
            variant={'filled'}
            id={'number'}
            type={'tel'}
            name={'number'}
            autoComplete={'off'}
            title={
              'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            }
            required
            value={formData.number}
            onChange={handleChange}
            placeholder={'+48 123-456-789'}
            mt={'10px'}
          />
        </FormLabel>
      </FormControl>
      <Flex justifyContent={'center'}>
        <Button
          type={'submit'}
          colorScheme={'green'}
          size={'md'}
          mb={'90px'}
          _hover={{ transform: 'scale(1.2)' }}
        >
          Add contact
        </Button>
      </Flex>
    </form>
  );
};

export default ContactForm;
