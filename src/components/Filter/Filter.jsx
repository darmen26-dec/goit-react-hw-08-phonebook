import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';
import { getFilter } from '../../redux/contacts/selectors';
import { Flex, Input } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Flex>
      <Input
        type={'text'}
        name={'filterName'}
        value={filter.status}
        onChange={onFilterChange}
        placeholder={'Enter name'}
        fontSize={'sm'}
        mt={'5'}
        mb={'2'}
      />
    </Flex>
  );
};

export default Filter;
