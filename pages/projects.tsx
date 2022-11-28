import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react'

const Projects = () => {
  return (
    <Container>
      <Box p={2} display="flex" justifyContent="center" mt={8}>
        <Heading
          fontSize="6xl"
          color={useColorModeValue('blue.500', 'lemonYellow')}
        >
          Projects
        </Heading>
      </Box>
    </Container>
  )
}

export default Projects
