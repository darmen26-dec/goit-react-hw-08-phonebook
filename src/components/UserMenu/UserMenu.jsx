import {
  HomeLink,
  ContactsLink,
  AuthButton,
  UnAuthButton,
} from '../UserMenu/Styles';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn, selectUserName } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import { Flex, Box, Text, ButtonGroup } from '@chakra-ui/react';

const AuthorizedNav = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  return (
    <>
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        maxW={'100%'}
        padding={'10px'}
        boxSizing={'border-box'}
      >
        <Flex>
          <HomeLink>Home</HomeLink>
          <ContactsLink>Contacts</ContactsLink>
        </Flex>
        <Text mt={'2'} fontSize={'lg'} fontWeight={'semibold'}>
          Welcome, {userName}
          <AuthButton onClick={handleLogout}>Log Out</AuthButton>
        </Text>
      </Flex>
    </>
  );
};

const UnAuthorizedNav = () => {
  return (
    <>
      <Flex
        alignItems={'center'}
        justifyContent={'space-between'}
        maxW={'100%'}
        padding={'10px'}
        boxSizing={'border-box'}
      >
        <HomeLink>Home</HomeLink>
        <Flex>
          <ButtonGroup gap={'1'}>
            <UnAuthButton to="/register">Sign Up</UnAuthButton>
            <UnAuthButton to="/login">Log In</UnAuthButton>
          </ButtonGroup>
        </Flex>
      </Flex>
    </>
  );
};

export const UserMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Box p={'2'}>
        {isLoggedIn ? <AuthorizedNav /> : <UnAuthorizedNav />}
        <Outlet />
      </Box>
    </>
  );
};
