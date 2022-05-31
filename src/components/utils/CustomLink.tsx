import { useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { LinkProps, useResolvedPath, useMatch, NavLink } from 'react-router-dom';
import { Link as ChakraLink } from "@chakra-ui/react";
import './CustomLink.css';

const CustomLink = ({ children, to, ...props }: LinkProps) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <ChakraLink
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      >
      <NavLink
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </NavLink>
    </ChakraLink>
  );
}

export default CustomLink