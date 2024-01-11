import { NavLink } from 'react-router-dom';
import { Button, Link } from '@chakra-ui/react';

export const HomeLink = ({ children }) => (
  <Link
    as={NavLink}
    to="/"
    _hover={{ transform: 'scale(1.2)' }}
    marginLeft={'30px'}
    marginRight={'40px'}
    fontSize={'xl'}
    fontWeight={'bold'}
  >
    {children}
  </Link>
);

export const ContactsLink = ({ children }) => (
  <Link
    as={NavLink}
    to="/contacts"
    _hover={{ fontWeight: 'bold', transform: 'scale(1.2)' }}
    fontSize={'xl'}
    fontWeight={'bold'}
  >
    {children}
  </Link>
);

export const AuthButton = ({ children, onClick }) => (
  <Button
    _hover={{ transform: 'scale(1.2)' }}
    style={{ marginLeft: '25px', marginRight: '30px' }}
    colorScheme={'blue'}
    onClick={onClick}
  >
    {children}
  </Button>
);

export const UnAuthButton = ({ children, to }) => (
  <Button
    _hover={{ transform: 'scale(1.1)' }}
    colorScheme={'orange'}
    marginRight={'30px'}
  >
    <NavLink to={to}>{children}</NavLink>
  </Button>
);
