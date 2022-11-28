import {
  Box,
  Container,
  Flex,
  Stack,
  Heading,
  Link,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import NextLink from 'next/link'
import ThemeButton from './theme-button'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('black.200', 'whiteAlpha.900')
  const activeColor = useColorModeValue('shrekGreen', 'teal')
  return (
    <NextLink href={href} legacyBehavior passHref scroll={false}>
      <Link
        px={2}
        borderRadius="full"
        bg={active ? activeColor : undefined}
        color={active ? 'almostWhite' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <Box
      position="fixed"
      bg={useColorModeValue('linen', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      w="100%"
      as="nav"
      {...props}
    >
      <Container
        display="flex"
        p={2}
        align="center"
        wrap="wrap"
        maxW="container.md"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading
            fontFamily="Reef, sans-serif"
            color={useColorModeValue('gray.900', 'whiteAlpha.900')}
            ml={3}
            fontSize={'2xl'}
          >
            Edward Matthew
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/" path={path}>
            About Me
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            Projects
          </LinkItem>
          <LinkItem
            href="https://github.com/thecipherrr"
            path={path}
            target="_blank"
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub /> Source
          </LinkItem>
        </Stack>

        <Box align="right" flex={1}>
          <ThemeButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                borderRadius="xl"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem>About Me</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem>Projects</MenuItem>
                </NextLink>
                <NextLink
                  href="https://github.com/thecipherrr"
                  passHref
                  target="_blank"
                >
                  <MenuItem>Source Code</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
