import NextLink from 'next/link'
import {
  Box,
  Container,
  Heading,
  Text,
  Divider,
  Button,
  useColorModeValue
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Box>
        <Heading
          as="h1"
          display="flex"
          justifyContent="center"
          fontSize="6xl"
          flexDirection="row"
          mt={20}
        >
          Not{' '}
          <Text ml={3} color={useColorModeValue('blue.500', 'sandybrown')}>
            Found
          </Text>
        </Heading>
      </Box>
      <Text
        fontFamily="Reef"
        fontSize="3xl"
        display="flex"
        justifyContent="center"
        letterSpacing="tight"
        my={3}
      >
        Oops! There&apos;s nothing here!
      </Text>
      <Divider
        p={3}
        mb={6}
        borderColor={useColorModeValue('storm', 'whiteAlpha.900')}
      />
      <Box display="flex" justifyContent="center">
        <NextLink href="/" passHref>
          <Button bgColor={useColorModeValue('blue.500', 'darkslategray')}>
            Go to Homepage
          </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
