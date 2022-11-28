import {
  Box,
  Container,
  Text,
  Link,
  Stack,
  IconButton,
  Heading,
  useColorModeValue,
  useColorMode
} from '@chakra-ui/react'
import { SiLinkedin, SiInstagram } from 'react-icons/si'
import { IoLogoGithub } from 'react-icons/io5'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const Home = () => {
  return (
    <Container>
      <Box
        p={3}
        mb={6}
        mt={6}
        align="center"
        fontWeight="semibold"
        fontSize="6xl"
        fontFamily="Reef"
      >
        Yo! I&apos;m{' '}
        <Text
          fontSize="7xl"
          color={useColorModeValue('blue.500', 'lemonYellow')}
        >
          Cipher!
        </Text>
      </Box>
      <Box display="flex" align="center" p={3} mt={6}>
        <Stack
          direction="row"
          display="flex"
          justifyContent="space-between"
          w="100%"
          fontFamily="Reef"
          letterSpacing="widest"
          fontSize="md"
          maxW="container.md"
        >
          <Container>
            <Link
              href="https://linkedin.com/in/edward-matthew-kurniawan-348211221"
              target="_blank"
            >
              <IconButton
                aria-label="LinkedIn"
                icon={<SiLinkedin />}
                borderRadius="xl"
                mb={2}
                size="lg"
                fontSize="xl"
              />
              <Text>Edward Matthew</Text>
            </Link>
          </Container>
          <Container>
            <Link href="https://github.com/thecipherrr" target="_blank">
              <IconButton
                aria-label="GitHub"
                icon={<IoLogoGithub />}
                borderRadius="xl"
                mb={2}
                size="lg"
              />
              <Text>@thecipherrr</Text>
            </Link>
          </Container>
          <Container>
            <Link href="https://instagram.com/thecipherrr" target="_blank">
              <IconButton
                aria-label="LinkedIn"
                icon={<SiInstagram />}
                borderRadius="xl"
                mb={2}
                size="lg"
              />
              <Text>@thecipherrr</Text>
            </Link>
          </Container>
        </Stack>
      </Box>

      <Box
        letterSpacing="wide"
        display="inline-block"
        p={3}
        my={6}
        fontFamily="Reef"
      >
        <Heading
          variant="section-title"
          align="center"
          as="h1"
          fontSize="2xl"
          mt={10}
        >
          About Me
        </Heading>
        <Text fontSize="lg">
          Yo!, my name&apos;s{' '}
          <span
            style={{
              color: useColorModeValue('teal', 'lemonchiffon'),
              fontSize: '18px'
            }}
          >
            Edward Matthew Kurniawan
          </span>
          , but my friends usually call me{' '}
          <span
            style={{
              color: useColorModeValue('teal', 'lemonchiffon'),
              fontSize: '18px'
            }}
          >
            Cipher
          </span>
          !
        </Text>

        <Heading
          variant="section-title"
          align="center"
          as="h1"
          fontSize="2xl"
          mt={10}
        >
          Education
        </Heading>
        <Heading
          variant="points"
          color={useColorModeValue('teal', 'lemonYellow')}
        >
          High School Diploma
        </Heading>
        <Text fontSize="md">
          July 2017 - March 2020 <ArrowForwardIcon /> SMA Santa Ursula BSD
        </Text>
        <Heading
          variant="points"
          color={useColorModeValue('teal', 'lemonYellow')}
        >
          Undergraduate Student
        </Heading>
        <Text fontSize="md">
          September 2020 - Present <ArrowForwardIcon /> BINUS International
        </Text>
      </Box>
    </Container>
  )
}

export default Home
