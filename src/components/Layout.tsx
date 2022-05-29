import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Outlet } from 'react-router-dom';
import CustomLink from './utils/CustomLink';
import './Layout.css';

const LinksData = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/create-voter",
    name: "Create Voter"
  },
  {
    path: "/phase-one",
    name: "Phase One"
  },
  {
    path: "/phase-two",
    name: "Phase Two"
  },
];

export default function Layout() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>StealthVoting</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {LinksData.map((data) => (
                <CustomLink to={data.path}>{data.name}</CustomLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {LinksData.map((data) => (
                <CustomLink to={data.path}>{data.name}</CustomLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Container>
        <Outlet />
      </Container>
    </>
  );
}