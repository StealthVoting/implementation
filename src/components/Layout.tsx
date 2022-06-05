import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Outlet } from 'react-router-dom';
import CustomLink from './utils/CustomLink';
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'md'}
                  src={
                    'https://d2v9ipibika81v.cloudfront.net/uploads/sites/72/431539-PE9O1K-661-1140x684.jpg'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuOptionGroup title="Administrator">
                  <MenuItem value="create-party" onClick={() => navigate("admin/create-party", { replace: true })}>Create Party</MenuItem>
                </MenuOptionGroup>
                <MenuDivider />
                <MenuOptionGroup title="General">
                  <MenuItem value="stats" onClick={() => navigate("stats", { replace: true })}>Statistics</MenuItem>
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </Flex>
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

      <Container maxWidth={''} centerContent className={'container-width'}>
        <Outlet />
      </Container>
    </>
  );
}